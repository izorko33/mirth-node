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

async function CreateFunction(url, func, context) {
  const instance = context.instance;
  const URL = context.URL;
  for (const f in func) {
    if (func.hasOwnProperty(f)) {
      let funcName = func[f].operationId;
      let parameters = [];
      let parametersWithoutDefaults = [];
      let missingParamsWithoutDefaults = [];
      let schemaParams = [];
      let queryParams;

      const isLogin = url.includes('login');
      if (func[f].operationId === 'getMessages_1') {
        funcName = 'getMessagesByChannelId';
      }

      if (func[f].parameters) {
        func[f].parameters.forEach(function (paramsLoop) {
          if (paramsLoop.name !== 'export' && paramsLoop.name !== 'url') {
            if (paramsLoop.schema.default !== undefined) {
              if (paramsLoop.name !== 'selectLimit' && paramsLoop.name !== 'username' && paramsLoop.name !== 'password') {
                parameters.push(`${paramsLoop.name} = ${paramsLoop.schema.default}`);
                parametersWithoutDefaults.push(paramsLoop.name);
              } else {
                parameters.push(paramsLoop.name);
                parametersWithoutDefaults.push(paramsLoop.name);
              }
            } else {
              parameters.push(paramsLoop.name);
              missingParamsWithoutDefaults.push(paramsLoop.name);
              if (paramsLoop.in !== 'path') {
                parametersWithoutDefaults.push(paramsLoop.name);
              }
            }
          }
        });
      }

      let returnValue;
      if (func[f].responses.default && func[f].responses.default.content['application/json']) {
        const responsesExamples = func[f].responses.default.content['application/json'].examples;
        for (const example in responsesExamples) {
          const testArray = responsesExamples[example]['$ref'].split('/').pop().split('_');
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
              schemaParams.push(text[0].toLowerCase() + text.slice(1));
            }
            if (headers.content['application/json']['schema']['items']) {
              const text = headers.content['application/json']['schema']['items']['$ref'];
              if (text) {
                schemaParams.push('list');
              }
            }
            if (headers.content['application/json']['schema'].type === 'object') {
              schemaParams.push('object');
            }
            return {
              'Content-Type': 'application/json',
            };
          } else if (headers.content['application/x-www-form-urlencoded']) {
            if (headers.content['application/x-www-form-urlencoded'].schema.required) {
              parameters.push(headers.content['application/x-www-form-urlencoded'].schema.required);
              // parametersWithoutDefaults.push(headers.content['application/x-www-form-urlencoded'].schema.required);
              queryParams = headers.content['application/x-www-form-urlencoded'].schema.required;
              headers.content['application/x-www-form-urlencoded'].schema.required.forEach(item =>
                parametersWithoutDefaults.push(item),
              );
            }
            return {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-Requested-With': 'OpenApi',
            };
          } else if (headers.content['text/plain']) {
            if (headers.content['text/plain'].schema) {
              schemaParams.push('textData');
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

      const prepareSchemaParams = param => {
        if (param === 'textData') {
          return 'textData,';
        }
        return 'postData,';
      };

      const backTick = '`';
      let fetchData;
      switch (f) {
        case 'get':
          fetchData = `
            // ${parametersWithoutDefaults.length !== 0 ? `const params = {${parametersWithoutDefaults}}` : ''}
            let data;
              await instance
                .get(URL + ${backTick + createUrlString(url) + backTick}, ${
            parametersWithoutDefaults.length !== 0 ? `{params}, ` : ''
          } {
                  headers: headers,
                })
                .then(function (response) {
                  data =  response.data${returnValue ? `.${returnValue}` : ''};
                })
                .catch(function (error) {
                  data = error.response.statusText;
                });
                return data;
                `;
          break;
        case 'put':
          fetchData = `
            ${schemaParams.length !== 0 ? `const postData = {${schemaParams}};` : ''}
            let data;
              await instance
                .put(URL + ${backTick + createUrlString(url) + backTick}, ${queryParams ? 'urlString, ' : ''}${
            schemaParams.length !== 0 ? `postData${schemaParams[0] === 'object' ? `.${schemaParams[0]}` : ''},` : ''
          } {
                  headers: headers,
                })
                .then(function (response) {
                  data =  response.data${returnValue ? `.${returnValue}` : ''};
                })
                .catch(function (error) {
                  data = error.response.statusText;
                });
                return data;
                `;
          break;
        case 'post':
          fetchData = `
            ${schemaParams.length !== 0 ? `const postData = {${schemaParams}};` : ''}
            let data;
              await instance
                .post(URL + ${backTick + createUrlString(url) + backTick}, ${
            parametersWithoutDefaults.length !== 0 ? 'urlString, ' : ''
          }${schemaParams.length !== 0 ? prepareSchemaParams(schemaParams[0]) : ''} {
                  headers: headers,
                })
                .then(function (response) {
                  ${
                    isLogin
                      ? `if (!instance.defaults.headers.Cookie) {
                          const [cookie] = response.headers['set-cookie'];
                          instance.defaults.headers.Cookie = cookie;
                        }
                        data = response.statusText;
                        `
                      : `data =  response.data${returnValue ? `.${returnValue}` : ''};`
                  }
                  ;
                })
                .catch(function (error) {
                  data = error.response.statusText;
                });
                return data;
                `;
          break;
        case 'delete':
          fetchData = `
            let data;
              await instance
                .delete(URL + ${backTick + createUrlString(url) + backTick}, ${queryParams ? 'urlString, ' : ''} {
                  headers: headers,
                })
                .then(function (response) {
                  data =  response.data${returnValue ? `.${returnValue}` : ''};
                })
                .catch(function (error) {
                  data = error.response.statusText;
                });
                return data;
                `;
          break;
        default:
          break;
      }

      const testParams = [...new Set(parameters.concat(schemaParams))];
      const prepareParams = `${
        testParams.length !== 0 ? `${testParams.length <= 3 ? `${testParams.join(',')}` : `{${testParams.join(',')}}`}` : ''
      }`;

      // console.log(queryParams);

      const data = `async function ${funcName}(${prepareParams}) {
          // ${func[f].summary}
          const headers = ${JSON.stringify(headers)};
          ${
            parametersWithoutDefaults.length !== 0
              ? `
              const returnValuesOnly = obj => {
                let filteredParams = {};
                for (const key in obj) {
                  if (Object.hasOwnProperty.call(obj, key)) {
                    const element = obj[key];
                    if (element !== undefined) {
                      filteredParams[key] = element;
                    }
                  }
                }
                return filteredParams;
              };
              const params = {${parametersWithoutDefaults}}
              const urlString = new URLSearchParams(returnValuesOnly(params)).toString();
              `
              : ''
          }
          ${fetchData ? `${fetchData}` : ''}
        } module.exports = {${funcName}};`;

      const prepareFunc = eval(data);
      context[funcName] = prepareFunc[funcName];
    }
  }

  return context;
}

module.exports = { CreateFunction };
