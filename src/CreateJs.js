async function CreateJs() {
  return `const fs = require('fs');
    const { ExportPaths } = require('./ExportPaths');
  
    class ConnectMirth {
      constructor({ instanceClient = '', urlClient = '', usernameClient = '', passwordClient = '' } = {}) {
        this.instance = instanceClient;
        this.URL = urlClient;
        this.username = usernameClient;
        this.password = passwordClient;
    
        return this._init();
      }
      async _init() {
        const loginData = await Login({ instance: this.instance, url: this.URL, password: this.password, username: this.username });
        if (loginData['com.mirth.connect.model.LoginStatus'].status == 'SUCCESS') {
          console.log('User ' + this.username + ' logged in on ' + new Date());
        }
        return this;
      }
  
      exportPaths = () => ExportPaths(this.instance, this.URL);
      exportMessagesByChannelId = async (channelId, limit) => {
        const { name } = await this.getChannel(false, channelId);
        const currentDate = new Date().toJSON().slice(0, 16).split('T').join('-');
        const folderName = __dirname + '/exports/messages';
        const content = [];
    
        console.log('Started export for ' + limit + ' messages.');
        try {
          const { message } = await this.getMessagesByChannelId({ channelId: channelId, limit: limit, includeContent: true });
          message.forEach(message => {
            const messageObj = {
              messageID: message.messageId,
              status: message.connectorMessages.entry[0].connectorMessage.status,
              receivedDate: new Date(message.connectorMessages.entry[0].connectorMessage.receivedDate.time).toString(),
              messageRaw: message.connectorMessages.entry[0].connectorMessage.raw.content,
            };
            content.push(messageObj);
          });
          if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
          }
          console.log('Exported ' + content.length + ' messages for ' + name);
          fs.writeFileSync(folderName + '/' + name + '-' + currentDate + '.json', JSON.stringify(content, null, 2), 'utf-8');
        } catch (error) {
          console.log('No messages in this channel!');
        }
      };

      exportChannels = async () => {
        const { channel } = await this.getChannels();
        const { codeTemplate } = await this.getCodeTemplates();
        const folderNameForChannels = __dirname + '/exports/channels/';
        const folderNameForCodeTemplates = __dirname + '/exports/codeTemplates/';
    
        const createExports = item => {
          const folderNameForEachChannel = folderNameForChannels + item.name;
    
          if (!fs.existsSync(folderNameForEachChannel)) {
            fs.mkdirSync(folderNameForEachChannel);
          }
    
          try {
            if (item.sourceConnector.transformer.elements) {
              fs.writeFileSync(
                folderNameForEachChannel + '/Elements.json',
                JSON.stringify(item.sourceConnector.transformer.elements),
              );
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
    
          try {
            fs.writeFileSync(folderNameForEachChannel + '/channel.json', JSON.stringify(item, null, 2), 'utf-8');
          } catch (error) {
            console.log(error);
          }
        };
    
        if (!fs.existsSync(folderNameForChannels)) {
          fs.mkdirSync(folderNameForChannels);
        }
    
        if (!fs.existsSync(folderNameForCodeTemplates)) {
          fs.mkdirSync(folderNameForCodeTemplates);
        }
    
        if (Array.isArray(channel)) {
          channel.forEach(item => {
            createExports(item);
          });
        } else {
          createExports(channel);
        }
        if (Array.isArray(codeTemplate)) {
          codeTemplate.forEach(item => {
            const folderNameForEachTemplate = folderNameForCodeTemplates + item.name;
            if (!fs.existsSync(folderNameForEachTemplate)) {
              fs.mkdirSync(folderNameForEachTemplate);
            }
    
            try {
              fs.writeFileSync(folderNameForEachTemplate + '/' + item.name + '.json', JSON.stringify(item, null, 2), 'utf-8');
              fs.writeFileSync(folderNameForEachTemplate + '/' + item.name + '.js', item.properties.code);
            } catch (error) {
              console.log(error);
            }
          });
        }
      };

      updateChannelById = async channelId => {
        try {
          const channel = await this.getChannel(true, channelId);
          const fileNameForDestnation = __dirname + '/exports/channels/' + channel.name + '/Destination.js';
          let destination;
    
          try {
            const data = fs.readFileSync(fileNameForDestnation, 'utf8');
            destination = data;
          } catch (err) {
            console.error(err);
          }
    
          channel.destinationConnectors.connector.properties.script = destination;
    
          await this.updateChannel(true, channelId, channel);
          console.log('Success for ' + channel.name);
        } catch (error) {
          console.log('No channel by that ID!');
        }
      };

      updateAllCodeTemplates = async () => {
        const { codeTemplate } = await this.getCodeTemplates();
        const folderNameForCodeTemplates = __dirname + '/exports/codeTemplates/';
        if (Array.isArray(codeTemplate)) {
          codeTemplate.forEach(item => {
            const folderNameForEachTemplate = folderNameForCodeTemplates + item.name;
    
            try {
              const dataJson = fs.readFileSync(folderNameForEachTemplate + '/' + item.name + '.json', 'utf8');
              const codeTemplateJson = JSON.parse(dataJson);
    
              const code = fs.readFileSync(folderNameForEachTemplate + '/' + item.name + '.js', 'utf8');
              codeTemplateJson.properties.code = code;
    
              this.updateCodeTemplate(true, item.id, codeTemplateJson);
              console.log('Success for ' + item.name);
            } catch (error) {
              console.log(error);
            }
          });
        }
      };
  
  
    `;
}

module.exports = { CreateJs };
