import axios from 'axios';

const projectsURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/mechaData.json';

export async function getProjects() {
  try {
    const response = await axios.get(projectsURL);
    const projects = await response.data;
    return projects;
  } catch (error) {
    console.log('get projects error:', error)
    return error;
  }
}