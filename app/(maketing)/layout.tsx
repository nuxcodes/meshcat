import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col ">
      <header className="flex justify-between py-6 px-4 sm:px-6 lg:px-8">
        <Navbar></Navbar>
      </header>
      <main className="relative mx-auto flex h-full w-full flex-auto flex-col justify-start">
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  );
};
export default layout;
