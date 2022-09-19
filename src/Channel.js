async function GetChannels(instance, url) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let channels;
  await instance
    .get(url + '/channels', {
      headers: headers,
    })
    .then(function (response) {
      channels = response.data.list.channel;
    })
    .catch(function (error) {
      console.log(error);
    });

  return channels;
}

async function GetChannelsStatistics(instance, url) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let channelStatistics;
  await instance
    .get(url + '/channels/statistics', {
      headers: headers,
    })
    .then(function (response) {
      channelStatistics = response.data.list.channelStatistics;
    })
    .catch(function (error) {
      console.log(error);
    });

  return channelStatistics;
}

async function GetChannelById(instance, url, id) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let channel;
  await instance
    .get(url + `/channels/${id}`, {
      headers: headers,
    })
    .then(function (response) {
      channel = response.data.channel;
    })
    .catch(function (error) {
      console.log(error);
    });

  return channel;
}

module.exports = { GetChannels, GetChannelById, GetChannelsStatistics };
