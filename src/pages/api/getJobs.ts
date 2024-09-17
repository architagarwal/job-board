import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { JobList, ErrorResponse } from "../../types/types"
import { getData } from '../utils/utils';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobList | ErrorResponse>
) {
  if(req.method === 'GET') {
    const filePath = path.join(process.cwd(), '/src/data/jobs.json');
    const jobs = getData(filePath);
    res.status(200).json(jobs);
  } else {
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
