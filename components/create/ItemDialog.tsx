'use client';

import type { FC, ReactElement, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Scan } from '@prisma/client';
import { scanUrl } from '@/lib/s3/urls';

interface ItemDialogProps {
  children: ReactNode;
}

const ItemDialog: FC<ItemDialogProps> = ({ children }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
      <Dialog.Content className="fixed bottom-1/2 right-1/2 flex h-[70vh] w-[70vw] translate-x-1/2 translate-y-1/2 items-start justify-start bg-white bg-white">
        {children}
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  );
};

interface ScanDialogProps extends ItemDialogProps {
  scan: Pick<Scan, 'name' | 'description'>;
}

const ScanDialog: FC<ScanDialogProps> = ({ scan, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <ItemDialog>
        <div className="flex-1 bg-white"></div>
        <div className="flex w-[10vw] flex-col gap-10">
          <Dialog.Title className="font-display text-xl">
            {scan.name}
          </Dialog.Title>
          <Dialog.Description className="">
            {scan.description}
          </Dialog.Description>
        </div>
      </ItemDialog>
    </Dialog.Root>
  );
};

export { ScanDialog };
