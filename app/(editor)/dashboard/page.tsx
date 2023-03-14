import { ScanDialog } from '@/components/create/ItemDialog';
import ScanCard from '@/components/create/ScanCard';
import { getScans } from '@/lib/prisma/getScans';
import { thumbnailUrl } from '@/lib/s3/urls';
import { Scan } from '@prisma/client';
import Link from 'next/link';

export default async function page() {
  let scanItems: Scan[] = [];
  await getScans()
    .then((scans) => {
      scanItems = scans;
    })
    .catch((e) => console.log('Error'));

  return (
    <div className="flex h-full min-h-[30rem] flex-col gap-6 px-10 py-8">
      <div className="flex min-h-[15rem] flex-col items-start justify-start rounded-lg bg-[#1d1d1d] px-10 py-6">
        <h1 className="text-xl">My Works</h1>
      </div>
      <div className="flex min-h-[25rem] flex-col items-start justify-start rounded-lg bg-[#1d1d1d] px-10 py-6">
        <h1 className="mb-6 text-xl">Create from Scans</h1>
        <div className="grid w-full grid-cols-4 gap-6">
          {scanItems.map((scan) => (
            <ScanDialog
              key={scan.name}
              scan={{ name: scan.name, description: scan.description }}
            >
              <button>
                <ScanCard
                  scan={{ name: scan.name, description: scan.description }}
                ></ScanCard>
              </button>
            </ScanDialog>
          ))}
        </div>
      </div>
    </div>
  );
}
