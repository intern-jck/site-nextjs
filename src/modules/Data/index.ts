import axios from 'axios';

const projectsURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/mechaData.json';

export async function getProjects() {
  console.log('getting projects');
  try {
    const response = await axios.get(projectsURL);
    const projects = await response.data;
    console.log('got', projects)
    // res.status(200).json(projects);
    return projects;
  } catch (error) {
    console.log('get projects error:', error)
    return error;
  }
}