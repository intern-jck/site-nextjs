// import { githubInstance } from '@/modules/data';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

const WORK_JSON_URL = process.env.WORK_JSON_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(WORK_JSON_URL!);
    const jsonData = await response.data;
    res.status(200).json(jsonData);
    return true;
  } catch(error) {
    console.error(error);
    return res.status(500).json({ msg: 'code json not found'});
  }
};
