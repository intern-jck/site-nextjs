import axios from 'axios';

export default axios.create({
  baseURL: process.env.CODE_JSON_URL,
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});



