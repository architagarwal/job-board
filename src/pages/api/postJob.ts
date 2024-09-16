import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import { Job, PostResponse } from "../../types/types"
import { getData } from '../utils/utils';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostResponse>
) {
  if(req.method === 'POST') {
    const {company, description, email, expiry, location, name, requirements, title} = req.body;
    const filePath = path.join(process.cwd(), '/src/data/jobs.json');
    const jobs = getData(filePath);
    const newJobId = Math.round(Math.random()*10000000);
    const newJobData = {
      id: newJobId,
      company,
      description,
      email,
      expiry: new Date(expiry).getTime(),
      location,
      name,
      requirements,
      title,
      minBid: 0,
      maxBid: 0,
      totalBids: 0,
      publishDate: new Date().getTime()
    }
    jobs[newJobId.toString()] = newJobData;

    // Write the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2));

    // Response to client
    res.status(200).json({message: 'Job posted successfully!'});
  } else {
    res.status(405).json({ message: 'Only POST method allowed!' });
  }
}
