import { cache } from 'react';
import prisma from './prisma';

export const getUser = cache(async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
});
