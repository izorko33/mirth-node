const fs = require('fs');
const axios = require('axios');
const { ExportPaths } = require('./ExportPaths');

class MirthClient {
  constructor({ host = '', port = '', username = '', password = '', disableTLSCheck = false } = {}) {
    this._host = host;
    this._port = port;
    this._username = username;
    this._password = password;

    this.URL = `https://${host}:${port}/api`;

    this.instance = axios.create({
      baseURL: this.URL,
      withCredentials: true,
      headers: {
        'X-Requested-With': 'OpenApi',
      },
    });

    if (disableTLSCheck) {
      process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    }

    return this._init();
  }
  async _init() {
    const folderNameForFunctons = __dirname + `/functions`;
    const folderNameForExports = './exports';
    if (!fs.existsSync(folderNameForExports)) {
      fs.mkdirSync(folderNameForExports);
    }
    if (!fs.existsSync('README.MD')) {
      fs.writeFileSync('README.MD', '');
    }
    if (!fs.existsSync(folderNameForFunctons)) {
      await ExportPaths(this.instance, this.URL);
    }

    try {
      const { ConnectMirth } = require('./MirthConnect');
      if (ConnectMirth) {
        const client = await new ConnectMirth({
          instanceClient: this.instance,
          urlClient: this.URL,
          usernameClient: this._username,
          passwordClient: this._password,
        });
        return client;
      }
    } catch (error) {
      return error;
    }
  }
}

module.exports = { MirthClient };
