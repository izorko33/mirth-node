const fs = require('fs');
const { GetChannelById } = require('./Channel');

async function GetMessagesByChannelId(instance, url, id, limit, offset, includeContent) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let messages;
  console.log(`Getting ${limit} messages...`);
  await instance
    .get(
      url +
        `/channels/${id}/messages?includeContent=${includeContent ? includeContent : false}&limit=${
          limit ? limit : '20'
        }&offset=${offset ? offset : '0'}`,
      {
        headers: headers,
      },
    )
    .then(function (response) {
      console.log('...done');
      messages = response.data.list.message;
    })
    .catch(function (error) {
      console.log(error);
    });

  return messages;
}

async function GetMessagesByMessageId(instance, url, channelId, messageId) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let message;
  await instance
    .get(url + `/channels/${channelId}/messages/${messageId}`, {
      headers: headers,
    })
    .then(function (response) {
      message = response.data.message;
    })
    .catch(function (error) {
      console.log(error);
    });

  return message;
}

async function GetMessagesCount(instance, url, channelId) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let count;
  await instance
    .get(url + `/channels/${channelId}/messages/count`, {
      headers: headers,
    })
    .then(function (response) {
      count = response.data.long;
    })
    .catch(function (error) {
      console.log(error);
    });

  return count;
}

async function ExportMessagesByChannelId(instance, url, channelId, limit) {
  const content = [];
  const { name } = await GetChannelById(instance, url, channelId);
  const folderName = __dirname + `/exports`;
  const fileName = __dirname + `/exports/${name}.json`;

  const messages = await GetMessagesByChannelId(instance, url, channelId, limit, 0, true);

  messages.forEach(message => {
    const messageObj = {
      messageID: message.messageId,
      status: message.connectorMessages.entry[0].connectorMessage.status,
      receivedDate: new Date(message.connectorMessages.entry[0].connectorMessage.receivedDate.time).toString(),
      messageRaw: message.connectorMessages.entry[0].connectorMessage.raw.content,
    };
    content.push(messageObj);
  });

  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
    console.log(`Exporting ${limit} messages for ${name}`);
    fs.writeFileSync(fileName, JSON.stringify(content, null, 2), 'utf-8');
  } catch (err) {
    console.error(err);
  }
}

module.exports = { GetMessagesByChannelId, GetMessagesByMessageId, GetMessagesCount, ExportMessagesByChannelId };
