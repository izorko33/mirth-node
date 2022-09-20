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
      const [cookie] = response.headers['set-cookie'];
      instance.defaults.headers.Cookie = cookie;
      const user = await CheckCurrentUser(instance, url);
      loginData = { status: response.data['com.mirth.connect.model.LoginStatus'].status, username: user.username };
    })
    .catch(function (error) {
      console.log(error);
      loginData = { error: error };
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
    })
    .then(function (response) {
      users = response.data.list.user;
    })
    .catch(function (error) {
      console.log(error);
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
    })
    .then(function (response) {
      currentUser = response.data.user;
    })
    .catch(function (error) {
      console.log(error);
    });

  return currentUser;
}

module.exports = { Login, GetUsers, CheckCurrentUser };
