import DashNav from '@/components/ui/DashNav';
import MainNav from '@/components/ui/MainNav';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

export default async function layout({ children }: layoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-graphite text-white">
      <header className="flex h-[var(--mobile-nav-height)] items-center justify-between px-6 sm:px-8 md:h-[var(--nav-height)] lg:px-10">
        {/* @ts-expect-error Async Server Component */}
        <DashNav></DashNav>
      </header>
      <main className="relative mx-auto flex h-full w-full flex-auto flex-col justify-start overflow-hidden">
        {children}
      </main>
    </div>
  );
}
