import MainNav from '@/components/ui/MainNav';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container flex h-[var(--mobile-nav-height)] items-center justify-between px-6 sm:px-8 md:h-[var(--nav-height)] lg:px-10">
        <MainNav></MainNav>
      </header>
      <main className="relative mx-auto flex h-full w-full flex-auto flex-col justify-start overflow-hidden">
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  );
};
export default layout;
