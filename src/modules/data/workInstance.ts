import axios from 'axios';

const workInstance = axios.create({
  baseURL: process.env.WORK_JSON_URL,
  timeout: 1000,
});

export default workInstance;