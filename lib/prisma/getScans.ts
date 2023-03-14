import { cache } from 'react';
import prisma from './prisma';

export const getScans = () => {
  const scans = prisma.scan.findMany({});
  return scans;
};
