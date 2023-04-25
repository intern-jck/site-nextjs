import axios from 'axios';

const GITHUB_WORK_JSON_URL = process.env.GITHUB_WORK_JSON_URL;

export async function handler(slug: string) {
  try {
    const response = await axios.get(GITHUB_WORK_JSON_URL);
    const projects = await response.data;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].link === slug) {
        return projects[i];
      }
    }
    return undefined;
  } catch (error) {
    console.log('get projects error:', error)
    return error;
  }
}
