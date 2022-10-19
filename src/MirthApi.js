const axios = require('axios');
const fs = require('fs');
const net = require('net');
const { Export } = require('./Export');

function ifExists(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

class MirthClient {
  constructor({ host = '', port = '', username = '', password = '', disableTLSCheck = false } = {}) {
    this._host = host;
    this._port = port;
    this._username = username;
    this._password = password;

    this.URL = `https://${host}:${port}/api`;

    this.instance = axios.create({
      baseURL: this.URL,
      withCredentials: true,
      headers: {
        'X-Requested-With': 'OpenApi',
      },
    });

    if (disableTLSCheck) {
      process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    }

    return this._init();
  }

  async _init() {
    await Export(this);

    this.syncDown = async () => {
      const channels = await this.getChannels(undefined, false, true);
      const { codeTemplate } = await this.getCodeTemplates();
      const codeTemplateLibraries = await this.getCodeTemplateLibraries(undefined, true);
      const globalScripts = await this.getGlobalScripts();
      const exportsFolder = './exports';
      const folderNameForChannels = exportsFolder + '/channels/';
      const folderNameForGlobalScripts = exportsFolder + '/globalScripts/';
      const folderNameForCodeTemplates = exportsFolder + '/codeTemplates/';

      ifExists(exportsFolder);

      const createExports = item => {
        const folderNameForEachChannel = folderNameForChannels + item.name;
        const folderNameForEachChannelScripts = folderNameForEachChannel + '/Scripts/';

        if (fs.existsSync(folderNameForEachChannel)) {
          fs.rmdirSync(folderNameForEachChannel, { recursive: true });
        }

        ifExists(folderNameForEachChannel);
        ifExists(folderNameForEachChannelScripts);

        try {
          fs.writeFileSync(folderNameForEachChannel + '/channel.json', JSON.stringify(item, null, 2), 'utf-8');
        } catch (error) {
          console.log(error);
        }

        try {
          if (item.sourceConnector.transformer.elements) {
            const elements = item.sourceConnector.transformer.elements;
            for (const key in elements) {
              if (Object.hasOwnProperty.call(elements, key)) {
                const element = elements[key];
                const name = '/' + key.split('.').pop();
                fs.mkdirSync(folderNameForEachChannel + name);
                if (key.includes('JavaScriptStep')) {
                  if (Array.isArray(element)) {
                    element.forEach(item => {
                      fs.writeFileSync(folderNameForEachChannel + name + '/' + item.name + '.js', item.script);
                    });
                  } else {
                    fs.writeFileSync(folderNameForEachChannel + name + '/' + element.name + '.js', element.script);
                  }
                } else {
                  fs.writeFileSync(folderNameForEachChannel + name + '/' + name + '.json', JSON.stringify(element, null, 2));
                }
              }
            }
          }
        } catch (error) {
          console.log(error);
        }

        try {
          if (item.destinationConnectors.connector.properties !== undefined) {
            fs.writeFileSync(
              folderNameForEachChannel + '/Destination.js',
              item.destinationConnectors.connector.properties.script,
            );
          }
        } catch (error) {
          console.log(error);
        }

        for (const key in item) {
          if (Object.hasOwnProperty.call(item, key)) {
            const element = item[key];
            if (key.includes('Script')) {
              fs.writeFileSync(folderNameForEachChannelScripts + key + '.js', element);
            }
          }
        }
      };

      ifExists(folderNameForChannels);
      ifExists(folderNameForCodeTemplates);
      ifExists(folderNameForGlobalScripts);

      if (Array.isArray(globalScripts.map.entry)) {
        fs.writeFileSync(folderNameForGlobalScripts + 'globalScripts.json', JSON.stringify(globalScripts, null, 2), 'utf-8');
        globalScripts.map.entry.forEach(item => {
          const fileNameForGlobalScript = folderNameForGlobalScripts + item.string[0];
          ifExists(fileNameForGlobalScript);
          fs.writeFileSync(fileNameForGlobalScript + `/${item.string[0]}.js`, item.string[1], 'utf-8');
        });
      }

      if (Array.isArray(channels.channel)) {
        channels.channel.forEach(item => {
          createExports(item);
        });
      } else {
        createExports(channels.channel);
      }

      try {
        fs.writeFileSync(
          folderNameForCodeTemplates + 'codeTemplates.json',
          JSON.stringify(codeTemplateLibraries, null, 2),
          'utf-8',
        );
      } catch (error) {
        console.log(error);
      }

      try {
        fs.writeFileSync(folderNameForChannels + 'channels.json', JSON.stringify(channels, null, 2), 'utf-8');
      } catch (error) {
        console.log(error);
      }

      if (Array.isArray(codeTemplate)) {
        codeTemplate.forEach(item => {
          const folderNameForEachTemplate = folderNameForCodeTemplates + item.name;

          if (fs.existsSync(folderNameForEachTemplate)) {
            fs.rmdirSync(folderNameForEachTemplate, { recursive: true });
          }

          ifExists(folderNameForEachTemplate);

          try {
            fs.writeFileSync(folderNameForEachTemplate + '/' + item.name + '.json', JSON.stringify(item, null, 2), 'utf-8');
            fs.writeFileSync(folderNameForEachTemplate + '/' + item.name + '.js', item.properties.code);
          } catch (error) {
            console.log(error);
          }
        });
      }
      console.log(`Succesfully downloaded ${channels.channel.length} channels and ${codeTemplate.length} code templates.`);
    };

    this.updateChannelById = async channelId => {
      const localChannels = fs.readFileSync('./exports/channels/channels.json');
      const parsedLocalChannels = JSON.parse(localChannels);
      const backupChannel = parsedLocalChannels.channel.find(item => item.id === channelId);
      try {
        const channel = (await this.getChannel(channelId)) || backupChannel;
        const fileNameForDestnation = './exports/channels/' + channel.name + '/Destination.js';
        const fileNameForMapperStep = './exports/channels/' + channel.name + '/MapperStep/MapperStep.json';

        try {
          const data = fs.readFileSync(fileNameForDestnation, 'utf8');
          channel.destinationConnectors.connector.properties.script = data;
        } catch (err) {
          console.error(`No Destination for ${channel.name}.`);
        }

        try {
          const data = {
            'com.mirth.connect.plugins.mapper.MapperStep': [],
            'com.mirth.connect.plugins.javascriptstep.JavaScriptStep': [],
          };
          const mapperStep = fs.readFileSync(fileNameForMapperStep, 'utf8');
          parsedMapperStep = JSON.parse(mapperStep);

          if (parsedMapperStep.length !== 0) {
            data['com.mirth.connect.plugins.mapper.MapperStep'] = parsedMapperStep;
          }

          const fileNameForJsElements = './exports/channels/' + channel.name + '/JavaScriptStep/';
          const channelJsElements =
            channel.sourceConnector.transformer.elements['com.mirth.connect.plugins.javascriptstep.JavaScriptStep'];
          const jsElements = [];
          let eachFile = 0;
          fs.readdirSync(fileNameForJsElements).forEach(file => {
            const element = fs.readFileSync(fileNameForJsElements + file, 'utf8');
            const existingElement = channelJsElements.filter(item => item.name === file.split('.')[0]);
            if (existingElement.length !== 0) {
              existingElement[0].script = element;
              jsElements.push(existingElement[0]);
            } else {
              let count =
                channel.sourceConnector.transformer.elements['com.mirth.connect.plugins.javascriptstep.JavaScriptStep'].length +
                channel.sourceConnector.transformer.elements['com.mirth.connect.plugins.mapper.MapperStep'].length +
                eachFile;
              const elementJson = {
                '@version': channel['@version'],
                'name': file.split('.')[0],
                'sequenceNumber': count,
                'enabled': true,
                'script': element,
              };
              eachFile++;
              jsElements.push(elementJson);
            }
          });
          channel.sourceConnector.transformer.elements['com.mirth.connect.plugins.javascriptstep.JavaScriptStep'] = jsElements;
        } catch (err) {
          console.error(`No Tranformer elements for ${channel.name}.`);
        }

        await this.updateChannel(channelId, true, channel);
        console.log('Created/Updated channel: ' + channel.name);
      } catch (error) {
        console.log('No channel by that ID!');
      }
    };

    this.updateAllCodeTemplates = async () => {
      const { codeTemplate } = await this.getCodeTemplates();
      const folderNameForCodeTemplates = './exports/codeTemplates/';
      if (Array.isArray(codeTemplate)) {
        codeTemplate.forEach(item => {
          const folderNameForEachTemplate = folderNameForCodeTemplates + item.name;

          try {
            const dataJson = fs.readFileSync(folderNameForEachTemplate + '/' + item.name + '.json', 'utf8');
            const codeTemplateJson = JSON.parse(dataJson);

            const code = fs.readFileSync(folderNameForEachTemplate + '/' + item.name + '.js', 'utf8');
            codeTemplateJson.properties.code = code;

            this.updateCodeTemplate(item.id, true, codeTemplateJson);
            console.log('Success for ' + item.name + ' code template.');
          } catch (error) {
            console.log(error);
          }
        });
      }
    };

    this.syncUp = async () => {
      const codeTemplates = await this.getCodeTemplates();
      const channelsApi = await this.getChannels(undefined, false, true);
      const globalScripts = await this.getGlobalScripts();

      if (channelsApi) {
        if (Array.isArray(channelsApi.channel)) {
          channelsApi.channel.forEach(async item => {
            await this.updateChannelById(item.id);
          });
        } else {
          await this.updateChannelById(channelsApi.channel.id);
        }
      } else {
        try {
          const jsonForChannels = './exports/channels/channels.json';
          const dataJson = fs.readFileSync(jsonForChannels, 'utf8');
          const channels = JSON.parse(dataJson);
          channels.channel.forEach(async channel => {
            await this.updateChannelById(channel.id);
          });
        } catch (error) {
          console.log(error);
        }
      }

      if (globalScripts) {
        const folderNameForGlobalScripts = './exports/globalScripts/';

        for (const item of globalScripts.map.entry) {
          const fileNameForGlobalScript = folderNameForGlobalScripts + `${item.string[0]}/${item.string[0]}.js`;
          const globalScript = fs.readFileSync(fileNameForGlobalScript, 'utf-8');
          item.string[1] = globalScript;
        }
        await this.setGlobalScripts(globalScripts);
        console.log('Global scripts updated.');
      }

      if (codeTemplates) {
        await this.updateAllCodeTemplates();
      }

      await this.redeployAllChannels();
    };

    this.exportMessagesByChannelId = async (channelId, limit) => {
      const channel = await this.getChannel(channelId);
      const currentDate = new Date().toJSON().slice(0, 16).split('T').join('-');
      const folderName = './exports/messages';
      const content = [];

      console.log('Started export for ' + limit + ' messages.');

      try {
        let messagesArray = [];
        const limitForAray = 500;
        if (limit < limitForAray) {
          const messages = await this.getMessagesByChannelId({
            channelId: channelId,
            limit: limit,
            includeContent: true,
          });
          messagesArray.push(...messages.message);
        } else {
          const leftForExport = limit % limitForAray;
          if (leftForExport !== 0) {
            const messages = await this.getMessagesByChannelId({
              channelId: channelId,
              limit: leftForExport,
              includeContent: true,
            });
            messagesArray.push(...messages.message);
            console.log(`Chanell ${channel.name}: Done for ${leftForExport}/${limit}`);
          }
          for (var i = 0; i < limit; i++) {
            if (i % limitForAray == 0) {
              if (i + leftForExport !== limit) {
                const messages = await this.getMessagesByChannelId({
                  channelId: channelId,
                  limit: limitForAray,
                  includeContent: true,
                  offset: i + leftForExport,
                });
                messagesArray.push(...messages.message);
                console.log(`Chanell ${channel.name}: Done for ${i + leftForExport + limitForAray}/${limit}`);
              }
            }
          }
        }

        messagesArray.forEach(message => {
          if (message.connectorMessages.entry[0] !== undefined) {
            const messageObj = {
              messageID: message.messageId,
              status: message.connectorMessages.entry[0].connectorMessage.status,
              receivedDate: new Date(message.connectorMessages.entry[0].connectorMessage.receivedDate.time).toString(),
              messageRaw: message.connectorMessages.entry[0].connectorMessage.raw.content,
            };
            content.push(messageObj);
          } else {
            const messageObj = {
              messageID: message.messageId,
              status: message.connectorMessages.entry.connectorMessage.status,
              receivedDate: new Date(message.connectorMessages.entry.connectorMessage.receivedDate.time).toString(),
              messageRaw: message.connectorMessages.entry.connectorMessage.raw.content,
            };
            content.push(messageObj);
          }
        });

        ifExists(folderName);
        console.log('Exported ' + content.length + ' messages for ' + channel.name);
        fs.writeFileSync(
          folderName + '/' + channel.name + '-' + currentDate + '.json',
          JSON.stringify(content, null, 2),
          'utf-8',
        );
      } catch (error) {
        console.log('No messages in this channel!');
      }
    };

    this.sendMessagesToChannel = async (pathToFileName, host, port) => {
      const VT = String.fromCharCode(0x0b);
      const FS = String.fromCharCode(0x1c);
      const CR = String.fromCharCode(0x0d);

      try {
        let count = 0;
        const dataJson = fs.readFileSync(pathToFileName);
        const messagesJson = JSON.parse(dataJson);

        const client = new net.Socket();
        client.connect(port, host, function () {
          console.log('CONNECTED TO: ' + host + ':' + port);
        });

        client.on('data', function (data) {
          count++;
          if (count === messagesJson.length) {
            client.destroy(); // Close the client socket completely
          }
        });

        client.on('close', function () {
          console.log('Connection closed');
        });

        messagesJson.forEach(item => {
          client.write(VT + item.messageRaw + FS + CR);
        });
      } catch (error) {
        console.log('No file with that name.');
      }
    };

    if (this.login !== undefined) {
      const loginData = await this.login(this._password, this._username);
      if (loginData === 'OK') {
        console.log('User ' + this._username + ' logged in on ' + new Date());
        return this;
      }
    } else {
      return;
    }
  }
}

module.exports = { MirthClient };
