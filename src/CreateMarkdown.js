const fs = require('fs');

async function CreateMarkdown(paths, schemas, info) {
  let tags = new Map();
  for (const path in paths) {
    for (const item in paths[path]) {
      const key = paths[path][item];
      let tag = key.tags[0];
      if (!tags.has(tag)) tags.set(tag, new Map());
      tags.get(tag).set(key.operationId, key);
    }
  }
  let markdown = '';
  tags.forEach((tag, banana) => {
    markdown += [`### ${banana}\r\n\r\n`].join('\r\n');
    tag.forEach((item, key) => {
      let parametersWithoutDefaults = [];
      let missingParamsWithoutDefaults = [];
      let schemaParams = [];
      let schemaParamsObject = [];

      if (item.parameters) {
        item.parameters.forEach(function (params) {
          if (params.name !== 'export' && params.name !== 'url') {
            if (params.schema.default !== undefined) {
              if (params.name !== 'selectLimit' && params.name !== 'username' && params.name !== 'password') {
                parametersWithoutDefaults.push(params.name);
              } else {
                parametersWithoutDefaults.push(params.name);
              }
            } else {
              missingParamsWithoutDefaults.push(params.name);
              if (params.in !== 'path') {
                parametersWithoutDefaults.push(params.name);
              }
            }
          }
        });
      }

      if (item.requestBody !== undefined) {
        if (item.requestBody.content['application/json']) {
          if (item.requestBody.content['application/json']['schema']['$ref']) {
            const text = item.requestBody.content['application/json']['schema']['$ref'].split('/').pop();
            const keyPair = Object.keys(schemas).find(item => item === text);
            schemaParamsObject.push(schemas[keyPair]);
            schemaParams.push(text[0].toLowerCase() + text.slice(1));
          }
        } else if (item.requestBody.content['application/x-www-form-urlencoded']) {
          if (item.requestBody.content['application/x-www-form-urlencoded'].schema.required) {
            parametersWithoutDefaults.push(item.requestBody.content['application/x-www-form-urlencoded'].schema.required);
          }
        } else if (item.requestBody.content['text/plain']) {
          if (item.requestBody.content['text/plain'].schema) {
            schemaParams.push('textData');
            schemaParamsObject.push(item.requestBody.content['text/plain'].schema);
          }
        }
      }

      const allParams = [...new Set(parametersWithoutDefaults.concat(missingParamsWithoutDefaults, schemaParams))];
      const prmsForMarkdown = `${
        allParams.length !== 0 ? `${allParams.length <= 5 ? `${allParams.join(',')}` : `{${allParams.join(',')}}`}` : ''
      }`;

      if (key === 'getMessages_1') {
        key = 'getMessagesByChannelId';
      }

      markdown += `#### ${key}(${prmsForMarkdown})\r\n\r\n`;
      markdown += `Summary: ${item.summary}\r\n\r\n`;

      if (item.parameters) {
        markdown += [
          `Parameters:\r\n`,
          `| Name | Description | Required | Properties |`,
          `| ------ | ------ | ------ | ------ |\r\n`,
        ].join('\r\n');
        item.parameters.forEach(function (params) {
          markdown += `| ${params.name} | ${params.description} | ${params.required ? 'Yes' : 'No'} |\r\n`;
        });
      }

      if (schemaParamsObject.length) {
        markdown += [
          `Object Parameters:\r\n`,
          `| Name | Description | Required | Properties |`,
          `| ------ | ------ | ------ | ------ |\r\n`,
        ].join('\r\n');
        schemaParamsObject.forEach((param, index) => {
          markdown += `| ${schemaParams[index]} | ${param.type} | Yes | ${
            param.properties !== undefined ? `{${Object.keys(param.properties)}}` : ''
          } |\r\n`;
        });
      }

      markdown += '---\r\n\r\n';
    });
  });
  try {
    fs.writeFileSync(__dirname + `/README-Mirth-${info.version}.md`, markdown, function (err) {
      if (err) return console.log(err);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { CreateMarkdown };
