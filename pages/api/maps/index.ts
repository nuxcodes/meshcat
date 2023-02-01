import prisma from '@/lib/prisma/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const maps = await prisma.map.findMany();

  res.status(200).json(maps);
};

export default handler;
