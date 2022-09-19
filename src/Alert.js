async function GetAlerts(instance, url) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let alerts;
  await instance
    .get(url + '/alerts', {
      headers: headers,
    })
    .then(function (response) {
      alerts = response.data.list;
    })
    .catch(function (error) {
      console.log(error);
    });
  return alerts;
}

module.exports = { GetAlerts };
