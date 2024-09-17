import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { PostResponse, ErrorResponse, User } from "../../types/types"
import { getData } from '../utils/utils';

/**
 * Login API is work in progress
 */

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostResponse | ErrorResponse>
) {
  if(req.method === 'POST') {
    const {email, password} = req.body;
    const filePath = path.join(process.cwd(), '/src/data/users.json');
    let users = getData(filePath);
    const userInfo: User | undefined = users[email];
    if(userInfo && userInfo.password === password) {
      res.status(200).json({message: "Authentication successfull!"});
    } else {
      res.status(401).json({message: "Unauthorized user!"});
    }
  } else {
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
