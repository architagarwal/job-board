import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import { JobList, ErrorResponse } from "../../types/types"
import querystring from "querystring";
import { getData } from '../utils/utils';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobList | ErrorResponse>
) {
  if(req.method === 'GET') {
    const url = req.url || "";
    const query = querystring.parse(url.split('?')[1]);
    const jobId = query.jobId as string;
    const filePath = path.join(process.cwd(), '/src/data/jobs.json');
    const jobs = getData(filePath);
    res.status(200).json(jobs[jobId]);
  } else {
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
