import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

const GITHUB_WORK_JSON_URL = process.env.GITHUB_WORK_JSON_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(GITHUB_WORK_JSON_URL!);
    const jsonData = await response.data;
    res.status(200).json(jsonData);
    return true;
  } catch(error) {
    console.error(error);
    return res.status(500).json({ msg: 'work json not found'});
  }
};
