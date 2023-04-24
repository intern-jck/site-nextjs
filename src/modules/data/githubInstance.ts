import axios from 'axios';

const githubInstance = axios.create({
  baseURL: 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data',
  timeout: 2000,
  headers: {
      'Content-Type': 'application/json'
  }
});

export default githubInstance;
