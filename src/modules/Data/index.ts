import axios from 'axios';

const projectsURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/work.json';
const photosURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/photos.json';
const codeURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/code.json';

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

export async function getProject(slug: string) {
  try {
    const response = await axios.get(projectsURL);
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

export async function getPhotos() {
  try {
    const response = await axios.get(photosURL);
    const photos = await response.data;
    return photos;
  } catch (error) {
    console.log('get photos error:', error)
    return error;
  }
}

export async function getPhoto(photoId: string) {
  try {
    const response = await axios.get(photosURL);
    const photos = await response.data;
    return photos;
  } catch (error) {
    console.log('get photos error:', error)
    return error;
  }
}


export async function getProjectPaths() {
  try {
    const projects = await getProjects();
    const projectPaths = [];
    for (let i = 0; i < projects.length; i++) {
      projectPaths.push({ 'slug': projects[i].link });
    };

    return projectPaths;
  } catch (error) {
    console.log('get photos error:', error)
    return error;
  }
}