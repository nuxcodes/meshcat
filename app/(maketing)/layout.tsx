import MainNav from '@/components/ui/MainNav';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-graphite text-white">
      <header className="container flex h-[var(--mobile-nav-height)] items-center justify-between px-6 sm:px-8 md:h-[var(--nav-height)] lg:px-10">
        <MainNav></MainNav>
      </header>
      <main className="relative mx-auto flex h-full w-full flex-auto flex-col justify-start overflow-hidden">
        {children}
      </main>
      <footer className="mb-4 flex justify-center text-center text-slate-400 lg:mb-8">
        <p>
          ©2023 MeshCat Team <em>for</em> PixlWorks Productions Inc.
        </p>
      </footer>
    </div>
  );
};
export default layout;
