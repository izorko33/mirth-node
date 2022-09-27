const fs = require('fs');

function createUrlString(url) {
  let newUrlArray;
  let newUrlFinal;
  if (url) {
    newUrlArray = url.split('/');
    newUrlArray.forEach(function (item, index) {
      if (item.includes('{')) newUrlArray[index] = '$' + newUrlArray[index];
    });
    newUrlFinal = newUrlArray.join('/');
  }
  return newUrlFinal;
}

async function CreateFunction(url, func, schemas) {
  for (const f in func) {
    if (func.hasOwnProperty(f)) {
      let funcName = func[f].operationId;
      let functionName = func[f].operationId.charAt(0).toUpperCase() + func[f].operationId.slice(1);
      let parameters = [];
      let parametersWithoutDefaults = [];
      let missingParamsWithoutDefaults = [];
      let schemaParams = [];
      let schemaParamsObject = [];
      let queryParams;

      const isLogin = url.includes('login');
      if (func[f].operationId === 'getMessages_1') {
        functionName = 'GetMessagesByChannelId';
        funcName = 'getMessagesByChannelId';
      }

      if (func[f].parameters) {
        func[f].parameters.forEach(function (params) {
          if (params.name !== 'export' && params.name !== 'url') {
            if (params.schema.default !== undefined) {
              if (params.name !== 'selectLimit' && params.name !== 'username' && params.name !== 'password') {
                parameters.push(`${params.name} = ${params.schema.default}`);
                parametersWithoutDefaults.push(params.name);
              } else {
                parameters.push(params.name);
                parametersWithoutDefaults.push(params.name);
              }
            } else {
              parameters.push(params.name);
              missingParamsWithoutDefaults.push(params.name);
              if (params.in !== 'path') {
                parametersWithoutDefaults.push(params.name);
              }
            }
          }
        });
      }

      let returnValue;
      if (func[f].responses.default && func[f].responses.default.content['application/json']) {
        const responsesExamples = func[f].responses?.default.content['application/json'].examples;
        for (const example in responsesExamples) {
          const testArray = responsesExamples[example]['$ref'].split('/').pop().split('_');
          // returnValue = testArray[testArray.length - 2];
          switch (testArray[testArray.length - 2]) {
            case 'boolean':
              returnValue = testArray[testArray.length - 2];
              break;
            case 'list':
              returnValue = testArray[testArray.length - 2];
              break;
            case 'attachment':
              returnValue = testArray[testArray.length - 2];
              break;
            case 'properties':
              returnValue = testArray[testArray.length - 2];
              break;
            case 'long':
              returnValue = testArray[testArray.length - 2];
              break;
            case 'map':
              returnValue = testArray[testArray.length - 2];
              break;
            case 'message':
              returnValue = testArray[testArray.length - 2];
              break;
            case 'channel':
              returnValue = testArray[testArray.length - 2];
              break;
            case 'user':
              returnValue = testArray[testArray.length - 2];
              break;
            default:
              break;
          }
        }
      }

      const checkHeaders = headers => {
        if (headers) {
          if (headers.content['application/json']) {
            if (headers.content['application/json']['schema']['$ref']) {
              const text = headers.content['application/json']['schema']['$ref'].split('/').pop();
              const keyPair = Object.keys(schemas).find(item => item === text);
              schemaParamsObject.push(schemas[keyPair]);
              schemaParams.push(text[0].toLowerCase() + text.slice(1));
            }
            return {
              'Content-Type': 'application/json',
            };
          } else if (headers.content['application/x-www-form-urlencoded']) {
            if (headers.content['application/x-www-form-urlencoded'].schema.required) {
              parameters.push(headers.content['application/x-www-form-urlencoded'].schema.required);
              parametersWithoutDefaults.push(headers.content['application/x-www-form-urlencoded'].schema.required);
              queryParams = headers.content['application/x-www-form-urlencoded'].schema.required;
            }
            return {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-Requested-With': 'OpenApi',
            };
          } else if (headers.content['text/plain']) {
            if (headers.content['text/plain'].schema) {
              schemaParams.push('textData');
              schemaParamsObject.push(headers.content['text/plain'].schema);
            }
            return {
              'Content-Type': 'text/plain',
            };
          } else
            return {
              'Content-Type': 'application/xml',
            };
        }
        return;
      };

      const headers =
        typeof func[f].requestBody !== 'undefined' ? checkHeaders(func[f].requestBody) : { 'Content-Type': 'application/json' };

      const backTick = '`';
      let fetchData;
      switch (f) {
        case 'get':
          fetchData = `
            ${parametersWithoutDefaults.length !== 0 ? `const params = {${parametersWithoutDefaults}}` : ''}
            let data;
              await instance
                .get(url + ${backTick}${createUrlString(url)}${backTick}, ${
            parametersWithoutDefaults.length !== 0 ? `{params}, ` : ''
          } {
                  headers: headers,
                })
                .then(function (response) {
                  data =  response.data${returnValue ? `.${returnValue}` : ''};
                })
                .catch(function (error) {
                  console.log(error);
                });
                return data;
                `;
          break;
        case 'put':
          fetchData = `
            ${schemaParams.length !== 0 ? `const postData = {${schemaParams}}` : ''}
            let data;
              await instance
                .put(url + ${backTick}${createUrlString(url)}${backTick}, ${queryParams ? 'urlString, ' : ''}${
            schemaParams.length !== 0 ? `postData,` : ''
          } {
                  headers: headers,
                })
                .then(function (response) {
                  data =  response.data${returnValue ? `.${returnValue}` : ''};
                })
                .catch(function (error) {
                  console.log(error);
                });
                return data;
                `;
          break;
        case 'post':
          fetchData = `
            ${schemaParams.length !== 0 ? `const postData = {${schemaParams}}` : ''}
            let data;
              await instance
                .post(url + ${backTick}${createUrlString(url)}${backTick}, ${queryParams ? 'urlString, ' : ''}${
            schemaParams.length !== 0 ? `postData,` : ''
          } {
                  headers: headers,
                })
                .then(function (response) {
                  ${
                    isLogin
                      ? `if (!instance.defaults.headers.Cookie) {
                    const [cookie] = response.headers['set-cookie'];
                    instance.defaults.headers.Cookie = cookie;
                  }`
                      : ''
                  }
                  data =  response.data${returnValue ? `.${returnValue}` : ''};
                })
                .catch(function (error) {
                  console.log(error);
                });
                return data;
                `;
          break;
        case 'delete':
          fetchData = `
            let data;
              await instance
                .delete(url + ${backTick}${createUrlString(url)}${backTick}, ${queryParams ? 'urlString, ' : ''} {
                  headers: headers,
                })
                .then(function (response) {
                  data =  response.data${returnValue ? `.${returnValue}` : ''};
                })
                .catch(function (error) {
                  console.log(error);
                });
                return data;
                `;
          break;
        default:
          break;
      }

      const data = `
        async function ${functionName}({instance, url${parameters.length !== 0 ? `, ${parameters.join(', ')}` : ''}${
        schemaParams.length !== 0 ? `, ${schemaParams.join(', ')}` : ''
      }}) {
          // ${func[f].summary}
          const headers = ${JSON.stringify(headers)}
          ${
            queryParams
              ? `
              const params = {${queryParams}}
              const urlString = new URLSearchParams(params).toString();
              `
              : ''
          }
          ${fetchData ? `${fetchData}` : ''}
        }
        module.exports = {${functionName}};
          `;

      const fileName = __dirname + `/functions/${functionName}.js`;

      try {
        fs.writeFileSync(fileName, data);
      } catch (err) {
        console.error(err);
      }

      // FOR NEWMIRTH CONNECT IMPORTS
      try {
        const fileNameConnect = __dirname + `/MirthConnect.js`;
        const data = fs.readFileSync(fileNameConnect).toString().split('\n');
        data.splice(3, 0, `const { ${functionName} } = require('./functions/${functionName}');`);
        const text = data.join('\n');
        fs.writeFileSync(fileNameConnect, text, function (err) {
          if (err) return console.log(err);
        });
      } catch (error) {
        console.error(error);
      }

      const allParams = [...new Set(parametersWithoutDefaults.concat(missingParamsWithoutDefaults, schemaParams))];

      const prmsForMarkdown = `${
        allParams.length !== 0 ? `${allParams.length <= 5 ? `${allParams.join(',')}` : ` {${allParams.join(',')}}`}` : ''
      }`;

      let markdown = [
        `#### ${functionName}(${prmsForMarkdown})\r\n`,
        `Summary: ${func[f].summary}\r\n`,
        `Parameters:\r\n`,
        `| Name | Description | Required | Properties |`,
        `| ------ | ------ | ------ | ------ |\r\n`,
      ].join('\r\n');

      if (func[f].parameters) {
        func[f].parameters.forEach(function (params) {
          markdown += `| ${params.name} | ${params.description} | ${params.required ? 'Yes' : 'No'} |\r\n`;
        });
      }

      if (schemaParamsObject.length) {
        schemaParamsObject.forEach((item, index) => {
          // console.log(Object.keys(item.properties));
          markdown += `| ${schemaParams[index]} | ${item.type} | Yes | ${
            item.properties !== undefined ? `{${Object.keys(item.properties)}}` : ''
          } |\r\n`;
        });
      }

      markdown += '---\r\n';

      // try {
      //   const data = fs.readFileSync('README.md').toString().split('\n');
      //   if (data.length < 2000) {
      //     data.push(markdown);
      //     const text = data.join('\n');
      //     fs.writeFileSync('README.md', text, function (err) {
      //       if (err) return console.log(err);
      //     });
      //   }
      // } catch (error) {
      //   console.log(error);
      // }

      // FOR NEWMIRTH CONNECT FUNCTIONS
      try {
        const fileNameConnect = __dirname + `/MirthConnect.js`;
        const data = fs.readFileSync(fileNameConnect).toString().split('\n');
        data.push(
          `${funcName} = (${
            allParams.length !== 0 ? `${allParams.length <= 5 ? `${allParams.join(',')}` : ` {${allParams.join(',')}}`}` : ''
          }) => ${functionName}({instance: this.instance, url: this.URL${allParams.length !== 0 ? `, ${allParams}` : ''}});`,
        );
        const text = data.join('\n');
        fs.writeFileSync(fileNameConnect, text, function (err) {
          if (err) return console.log(err);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
}

module.exports = { CreateFunction };
