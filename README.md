# Mirth-Node

The Mirth-js is a client for having Mirth for nodejs and react applications.
Tested Mirth versions: 3.x, 4.x

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Custom Functions](#custom-functions)

---

## Installation

```
npm install mirth-node --save
```

Import

```
const { MirthClient } = require('mirth-node');
require('dotenv').config(); // If you want to use proccess.env
```

---

## Usage

Example function

```
const { MirthClient } = require('mirth-node');
require('dotenv').config();

async function main() {
  const clientMirth = await new MirthClient({
    host: process.env.MIRTH_HOST,
    port: process.env.MIRTH_PORT,
    username: process.env.MIRTH_USER,
    password: process.env.MIRTH_PASSWORD,
    disableTLSCheck: true,
  });
  const currentUser = await clientMirth.getCurrentUser();
  console.log(currentUser);
}

main();

```

Creating new instance

```
  const clientMirth = new MirthClient({
    host: process.env.MIRTH_HOST,
    port: process.env.MIRTH_PORT,
    username: process.env.MIRTH_USER,
    password: process.env.MIRTH_PASSWORD,
    disableTLSCheck: true,
  });
```

Exporting all channels and code templates

```
await clientMirth.syncDown();
```

Uploading/updating all channels and code templates

```
await clientMirth.syncUp();
```

Check for current logged in user.

```
  const currentUser = await clientMirth.getCurrentUser();
  console.log(currentUser);
```

Getting all channels, checking count and downloading all message.

```
  const channels = await clientMirth.getChannels();
  channels.channel.forEach(async element => {
    const count = await clientMirth.getMessageCount({ channelId: element.id });
    console.log(`${element.name} : ${count}, id: ${element.id}`);
    if (count > 0) {
      clientMirth.exportMessagesByChannelId(element.id, count);
    }
  });
```

Send/resend messages to specific open port.

```
await clientMirth.sendMessagesToChannel([PATHTOFILE], 'localhost', '6661');
```

---

### Custom functions

#### syncDown()

Summary: Export all channels and code templates in exports folder.

---

#### syncUp()

Summary: Import all channels and code templates from exports folder. Auto redeploy.

---

#### updateChannelById(channelId)

Summary: Update only one specific channel. You will need to redeploy that channel.

---

#### exportMessagesByChannelId(channelId, limit)

Summary: Exports limited messages for specific channel.

---

#### sendMessagesToChannel(pathToFileName, host, port)

Summary: Send messages to specific channel from specific file.

---

#### updateAllCodeTemplates()

Summary: Update all code templates from exports folder.

---
