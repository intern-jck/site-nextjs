import fs from 'fs';
import { join } from 'path';
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

// const projectsDirectory = join(process.cwd(), 'data/projects');

const projectsURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/mechaData.json';

export async function getProjects(
  // req: NextApiRequest,
  // res: NextApiResponse,
) {
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