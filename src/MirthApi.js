const axios = require('axios');
const { Export } = require('./Export');

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
    await Export(this);

    if (this.login !== undefined) {
      const loginData = await this.login(this._password, this._username);
      if (loginData === 'OK') {
        console.log('User ' + this._username + ' logged in on ' + new Date());
        return this;
      }
    } else {
      return;
    }
  }
}

module.exports = { MirthClient };
