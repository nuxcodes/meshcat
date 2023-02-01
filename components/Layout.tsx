import type { FC } from 'react';
import Link from 'next/link';
import Navbar from './ui/Navbar';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen flex-col justify-between">
      <header className="flex justify-between py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:gap-6">
          <Link href="/">Logo</Link>
          <Navbar></Navbar>
        </div>
      </header>
      {children}
      <div className="w-full items-center">
        <p className="text-center">Footer</p>
      </div>
    </div>
  );
};

export default Layout;
