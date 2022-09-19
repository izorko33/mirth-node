const axios = require('axios');
const { GetAlerts } = require('./Alert');
const { GetChannels, GetChannelById, GetChannelsStatistics } = require('./Channel');
const { GetCodeTemplates, GetCodeTemplateById } = require('./CodeTemplate');
const { GetMessagesByChannelId, GetMessagesByMessageId, GetMessagesCount, ExportMessagesByChannelId } = require('./Message');
const { Login, GetUsers, CheckCurrentUser } = require('./User');

class ConnectMirth {
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
    const loginData = await Login(this.instance, this.URL, this._username, this._password);
    if (loginData.status == 'SUCCESS') {
      console.log(`User ${loginData.username} logged in on ` + new Date());
    }
    return this;
  }

  checkCurrentUser = () => {
    return CheckCurrentUser(this.instance, this.URL);
  };

  getUsers = () => {
    return GetUsers(this.instance, this.URL);
  };

  getAlerts = () => {
    return GetAlerts(this.instance, this.URL);
  };

  getChannels = () => {
    return GetChannels(this.instance, this.URL);
  };

  getChannelsStatistics = () => {
    return GetChannelsStatistics(this.instance, this.URL);
  };

  getChannelById = id => {
    return GetChannelById(this.instance, this.URL, id);
  };

  getCodeTemplates = () => {
    return GetCodeTemplates(this.instance, this.URL);
  };

  getCodeTemplateById = id => {
    return GetCodeTemplateById(this.instance, this.URL, id);
  };

  getMessagesByChannelId = (id, limit, offset, includeContent) => {
    return GetMessagesByChannelId(this.instance, this.URL, id, limit, offset, includeContent);
  };

  getMessagesByMessageId = (channelId, messageId) => {
    return GetMessagesByMessageId(this.instance, this.URL, channelId, messageId);
  };

  getMessagesCount = channelId => {
    return GetMessagesCount(this.instance, this.URL, channelId);
  };

  exportMessagesByChannelId = (channelId, limit) => {
    return ExportMessagesByChannelId(this.instance, this.URL, channelId, limit);
  };
}

module.exports = { ConnectMirth };
