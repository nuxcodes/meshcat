'use client';

import { thumbnailUrl } from '@/lib/s3/urls';
import { Scan } from '@prisma/client';
import Image from 'next/image';
import type { FC } from 'react';

interface ScanCardProps {
  scan: Pick<Scan, 'name' | 'description'>;
}

const ScanCard: FC<ScanCardProps> = ({ scan }) => {
  return (
    <div className="group flex w-full flex-col items-start justify-start gap-5 transition-transform duration-150 ease-in hover:translate-y-[-0.5rem]">
      <div className="relative h-[10rem] w-full overflow-clip rounded-lg transition-shadow duration-150 ease-in group-hover:shadow-xl group-hover:shadow-zinc-800 ">
        <Image
          src={thumbnailUrl(scan.name)}
          alt={scan.name}
          fill
          style={{ objectFit: 'cover' }}
        ></Image>
      </div>
      <span className="font-display text-sm font-semibold">
        {scan.name.toUpperCase()}
      </span>
    </div>
  );
};
export default ScanCard;
