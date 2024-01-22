const axios = require('axios');

const URL = 'https://api.github.com';

const instance = () => axios.create({
  baseUrl: URL,
  headers: {
    'Content-Type': "application/json"
  }
});

const http = {
  get: (path) => instance().get(URL+path)
};

module.exports = http;