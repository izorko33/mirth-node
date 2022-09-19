async function GetCodeTemplates(instance, url) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let codeTemplates;
  await instance
    .get(url + '/codeTemplates', {
      headers: headers,
    })
    .then(function (response) {
      codeTemplates = response.data.list.codeTemplate;
    })
    .catch(function (error) {
      console.log(error);
    });

  return codeTemplates;
}

async function GetCodeTemplateById(instance, url, id) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let codeTemplate;
  await instance
    .get(url + `/codeTemplates/${id}`, {
      headers: headers,
    })
    .then(function (response) {
      codeTemplate = response.data.codeTemplate;
    })
    .catch(function (error) {
      console.log(error);
    });

  return codeTemplate;
}

module.exports = { GetCodeTemplates, GetCodeTemplateById };
