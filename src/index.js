const { MirthClient } = require('./MirthApi');
require('dotenv').config();

async function main() {
  const clientMirth = await new MirthClient({
    host: process.env.MIRTH_HOST,
    port: process.env.MIRTH_PORT,
    username: process.env.MIRTH_USER,
    password: process.env.MIRTH_PASSWORD,
    disableTLSCheck: true,
  });
  const channels = await clientMirth.getCurrentUser();
  console.log(channels);
  // await clientMirth.exportPaths();
  // await clientMirth.updateAllCodeTemplates();
  // await clientMirth.updateChannelById('8956fb6e-67b4-4f7c-93e4-9d50848b5d6f');
  // const count = await clientMirth.getMessageCount({ channelId: 'f94f804d-64eb-4463-b5ba-cdb83b445698' });
  // console.log(count);
  // await clientMirth.exportMessagesByChannelId('f94f804d-64eb-4463-b5ba-cdb83b445698', 100);
}

main();
