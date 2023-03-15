import axios from 'axios';

const projectsURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/mechaData.json';
const photosURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/photosData.json';
const codeURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/codeData.json';

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

export async function getProject(projectId: string) {
  try {
    const response = await axios.get(projectsURL);
    const projects = await response.data;
    return projects;
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