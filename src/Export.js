const fs = require('fs');
const { CreateFunction } = require('./CreateFunction');
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
      console.log('Check your username, password, host or port!');
      return;
    }
  } catch (error) {
    console.log('Check your username, password, host or port!');
    return;
  }

  if (!fs.existsSync(__dirname + `/Functions-Mirth-${infoOpenApi.version}.md`)) {
    await CreateMarkdown(pathsOpenApi, componentsOpenApi, infoOpenApi);
  }

  for (const path in pathsOpenApi) {
    if (pathsOpenApi.hasOwnProperty(path)) {
      await CreateFunction(path, pathsOpenApi[path], context);
    }
  }

  return context;
}

module.exports = { Export };
