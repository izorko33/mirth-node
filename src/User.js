const axios = require('axios');
const querystring = require('querystring');

async function Login(instance, url, username, password) {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'OpenApi',
  };
  let loginData = {};
  await axios
    .post(url + '/users/_login', querystring.stringify({ username: username, password: password }), {
      headers: headers,
    })
    .then(async function (response) {
      // handle success
      const [cookie] = response.headers['set-cookie'];
      instance.defaults.headers.Cookie = cookie;
      const user = await CheckCurrentUser(instance, url);
      loginData = { status: response.data['com.mirth.connect.model.LoginStatus'].status, username: user.username };
      // status = response.data['com.mirth.connect.model.LoginStatus'].status;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      loginData = { error: error };
    })
    .then(function () {
      // always executed
    });
  return loginData;
}

async function GetUsers(instance, url) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let users;
  await instance
    .get(url + '/users', {
      headers: headers,
      //   withCredentials: true,
    })
    .then(function (response) {
      // handle success
      users = response.data.list.user;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return users;
}

async function CheckCurrentUser(instance, url) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let currentUser;
  await instance
    .get(url + '/users/current', {
      headers: headers,
      //   withCredentials: true,
    })
    .then(function (response) {
      // handle success
      currentUser = response.data.user;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return currentUser;
}

module.exports = { Login, GetUsers, CheckCurrentUser };
