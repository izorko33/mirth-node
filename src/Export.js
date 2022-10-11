const { CreateFunction } = require('./CreateFunction');
const fs = require('fs');
const axios = require('axios');
const net = require('net');
const { CreateMarkdown } = require('./CreateMarkdown');

function ifExists(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

async function Export(context) {
  const instance = context.instance;
  const URL = context.URL;
  let pathsOpenApi, componentsOpenApi, infoOpenApi;

  try {
    const openApiJson = await instance
      .get(URL + `/openapi.json`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });

    if (openApiJson.info !== undefined) {
      pathsOpenApi = openApiJson.paths;
      componentsOpenApi = openApiJson.components;
      infoOpenApi = openApiJson.info;
    } else {
      throw new Error('Check your username, password, host or port!');
    }
  } catch (error) {
    console.log('Check your username, password, host or port!');
    return;
  }

  if (!fs.existsSync(__dirname + `/README-Mirth-${infoOpenApi.version}.md`)) {
    await CreateMarkdown(pathsOpenApi, componentsOpenApi, infoOpenApi);
  }

  for (const path in pathsOpenApi) {
    if (pathsOpenApi.hasOwnProperty(path)) {
      await CreateFunction(path, pathsOpenApi[path], context);
    }
  }

  context.exportMessagesByChannelId = async (channelId, limit) => {
    const { name } = await context.getChannel(channelId);
    const currentDate = new Date().toJSON().slice(0, 16).split('T').join('-');
    const folderName = './exports/messages';
    const content = [];

    console.log('Started export for ' + limit + ' messages.');
    try {
      const { message } = await context.getMessagesByChannelId({ channelId: channelId, limit: limit, includeContent: true });
      message.forEach(message => {
        const messageObj = {
          messageID: message.messageId,
          status: message.connectorMessages.entry[0].connectorMessage.status,
          receivedDate: new Date(message.connectorMessages.entry[0].connectorMessage.receivedDate.time).toString(),
          messageRaw: message.connectorMessages.entry[0].connectorMessage.raw.content,
        };
        content.push(messageObj);
      });

      ifExists(folderName);

      console.log('Exported ' + content.length + ' messages for ' + name);
      fs.writeFileSync(folderName + '/' + name + '-' + currentDate + '.json', JSON.stringify(content, null, 2), 'utf-8');
    } catch (error) {
      console.log('No messages in this channel!');
    }
  };

  context.syncDown = async () => {
    const channels = await context.getChannels(undefined, false, true);
    const { codeTemplate } = await context.getCodeTemplates();
    const codeTemplateLibraries = await context.getCodeTemplateLibraries(undefined, true);
    const exportsFolder = './exports';
    const folderNameForChannels = exportsFolder + '/channels/';
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
          fs.writeFileSync(folderNameForEachChannel + '/Destination.js', item.destinationConnectors.connector.properties.script);
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

  context.updateChannelById = async channelId => {
    const localChannels = fs.readFileSync('./exports/channels/channels.json');
    const parsedLocalChannels = JSON.parse(localChannels);
    const backupChannel = parsedLocalChannels.channel.find(item => item.id === channelId);
    try {
      const channel = (await context.getChannel(channelId)) || backupChannel;
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

      await context.updateChannel(channelId, true, channel);
      console.log('Created/Updated channel: ' + channel.name);
    } catch (error) {
      console.log('No channel by that ID!');
      // console.log(error);
    }
  };

  context.updateAllCodeTemplates = async () => {
    const { codeTemplate } = await context.getCodeTemplates();
    const folderNameForCodeTemplates = './exports/codeTemplates/';
    if (Array.isArray(codeTemplate)) {
      codeTemplate.forEach(item => {
        const folderNameForEachTemplate = folderNameForCodeTemplates + item.name;

        try {
          const dataJson = fs.readFileSync(folderNameForEachTemplate + '/' + item.name + '.json', 'utf8');
          const codeTemplateJson = JSON.parse(dataJson);

          const code = fs.readFileSync(folderNameForEachTemplate + '/' + item.name + '.js', 'utf8');
          codeTemplateJson.properties.code = code;

          context.updateCodeTemplate(item.id, true, codeTemplateJson);
          console.log('Success for ' + item.name + ' code template.');
        } catch (error) {
          console.log(error);
        }
      });
    }
  };

  context.syncUp = async () => {
    const codeTemplates = await context.getCodeTemplates();
    const channelsApi = await context.getChannels(undefined, false, true);

    if (channelsApi) {
      if (Array.isArray(channelsApi.channel)) {
        channelsApi.channel.forEach(async item => {
          await context.updateChannelById(item.id);
        });
      } else {
        await context.updateChannelById(channelsApi.channel.id);
      }
    } else {
      try {
        const jsonForChannels = './exports/channels/channels.json';
        const dataJson = fs.readFileSync(jsonForChannels, 'utf8');
        const channels = JSON.parse(dataJson);
        channels.channel.forEach(async channel => {
          await context.updateChannelById(channel.id);
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (codeTemplates) {
      await context.updateAllCodeTemplates();
    }

    await context.redeployAllChannels();
  };

  context.sendMessagesToChannel = async (pathToFileName, host, port) => {
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

  return context;
}

module.exports = { Export };
