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

  const { paths, components } = await instance
    .get(url + `/openapi.json`, {
      headers: headers,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  const data = await CreateJs();

  await CreateMarkdown(paths, components.schemas);

  try {
    if (!fs.existsSync(folderNameForFunctons)) {
      fs.mkdirSync(folderNameForFunctons);
      fs.writeFileSync(fileNameConnect, data);
    }
    fs.writeFileSync(fileNameConnect, data);
  } catch (err) {
    console.error(err);
  }

  for (const path in paths) {
    if (paths.hasOwnProperty(path)) {
      CreateFunction(path, paths[path]);
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
