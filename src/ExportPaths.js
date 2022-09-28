const { CreateFunction } = require('./CreateFunction');
const fs = require('fs');
const { CreateJs } = require('./CreateJs');
const { CreateMarkdown } = require('./CreateMarkdown');

async function ExportPaths(instance, url) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const folderNameForFunctons = __dirname + `/functions`;
  const fileNameConnect = __dirname + `/MirthConnect.js`;
  let pathsOpenApi, componentsOpenApi, infoOpenApi;

  try {
    const { paths, components, info } = await instance
      .get(url + `/openapi.json`, {
        headers: headers,
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    pathsOpenApi = paths;
    componentsOpenApi = components;
    infoOpenApi = info;
  } catch (error) {
    console.log('Check your username, password, host or port!');
  }

  const data = await CreateJs();

  try {
    if (!fs.existsSync(__dirname + `/README-Mirth-${infoOpenApi.version}.md`)) {
      await CreateMarkdown(pathsOpenApi, componentsOpenApi.schemas, infoOpenApi);
    }
  } catch (err) {
    console.error(err);
  }

  try {
    if (!fs.existsSync(folderNameForFunctons)) {
      fs.mkdirSync(folderNameForFunctons);
      fs.writeFileSync(fileNameConnect, data);
    }
    fs.writeFileSync(fileNameConnect, data);
  } catch (err) {
    console.error(err);
  }

  for (const path in pathsOpenApi) {
    if (pathsOpenApi.hasOwnProperty(path)) {
      CreateFunction(path, pathsOpenApi[path]);
    }
  }

  try {
    const data = fs.readFileSync(fileNameConnect).toString().split('\n');
    data.push(`} module.exports = { ConnectMirth };`);
    const text = data.join('\n');
    fs.writeFileSync(fileNameConnect, text, function (err) {
      if (err) return console.log(err);
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { ExportPaths };
