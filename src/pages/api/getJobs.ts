import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import { JobList, ErrorResponse } from "../../types/types"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobList | ErrorResponse>
) {
  if(req.method === 'GET') {
    const filePath = path.join(process.cwd(), '/src/data/jobs.json');
    let jobs = {};
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      jobs = JSON.parse(fileContents);
    }
    res.status(200).json(jobs);
  } else {
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
