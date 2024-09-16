import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import { Job, ErrorResponse } from "../../types/types"
import { getData } from '../utils/utils';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job | ErrorResponse>
) {
  if(req.method === 'POST') {
    const {jobId, bid} = req.body;
    const filePath = path.join(process.cwd(), '/src/data/jobs.json');
    const jobs = getData(filePath);
    const newJobData: Job = jobs[jobId];
    newJobData.totalBids += 1;
    const intBid = parseInt(bid);
    if(newJobData.totalBids === 1) {
      newJobData.minBid = intBid;
      newJobData.maxBid = intBid;
    } else {
      if(intBid < newJobData.minBid) {
        newJobData.minBid = intBid;
      }
      if(intBid > newJobData.maxBid) {
        newJobData.maxBid = intBid;
      }
    }
    jobs[jobId] = newJobData;

    // Write the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2));

    // Response to client
    res.status(200).json(newJobData);
  } else {
    res.status(405).json({ message: 'Only POST method allowed!' });
  }
}
