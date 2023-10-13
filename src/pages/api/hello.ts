import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.json({
    hoge: process.env.FIREBASE_API_KEY
  })
}
