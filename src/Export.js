const { CreateFunction } = require('./CreateFunction');
const fs = require('fs');
const { CreateMarkdown } = require('./CreateMarkdown');

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
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
      console.log('Exported ' + content.length + ' messages for ' + name);
      fs.writeFileSync(folderName + '/' + name + '-' + currentDate + '.json', JSON.stringify(content, null, 2), 'utf-8');
    } catch (error) {
      console.log('No messages in this channel!');
    }
  };

  context.exportChannels = async () => {
    const { channel } = await context.getChannels();
    const { codeTemplate } = await context.getCodeTemplates();
    const exportsFolder = './exports';
    const folderNameForChannels = exportsFolder + '/channels/';
    const folderNameForCodeTemplates = exportsFolder + '/codeTemplates/';

    if (!fs.existsSync(exportsFolder)) {
      fs.mkdirSync(exportsFolder);
    }

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

  context.updateChannelById = async channelId => {
    try {
      const channel = await context.getChannel(channelId);
      const fileNameForDestnation = './exports/channels/' + channel.name + '/Destination.js';
      let destination;

      try {
        const data = fs.readFileSync(fileNameForDestnation, 'utf8');
        destination = data;
      } catch (err) {
        console.error(err);
      }

      channel.destinationConnectors.connector.properties.script = destination;

      await context.updateChannel(channelId, true, channel);
      console.log('Success for ' + channel.name);
    } catch (error) {
      console.log('No channel by that ID!');
      console.log(error);
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
          console.log('Success for ' + item.name);
        } catch (error) {
          console.log(error);
        }
      });
    }
  };

  return context;
}

module.exports = { Export };
