import { FC, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { getCurrentUser } from '@/lib/session';

import type { NextComponentType, NextPageContext } from 'next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import { getUser } from '@/lib/prisma/getUser';
import { getScans } from '@/lib/prisma/getScans';

const navLinks = [{ href: '/dashboard', title: 'CREATOR DASHBOARD' }];

export default async function DashNav() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions.pages.signIn);
  }

  const scans = await getScans();
  console.log('ID' + user.id);
  // const userData = await getUser(user.id);
  // console.log(userData);

  const navItems = navLinks.map((item) => (
    <Fragment key={item.href}>
      <Link
        href={item.href}
        key={item.href}
        className="after:ease relative my-auto after:absolute after:bottom-0 after:left-0 after:block after:h-[3px] after:w-full after:origin-top-left after:translate-y-2
        after:scale-x-0 after:bg-berry after:transition-all after:content-[''] after:duration-200 hover:after:scale-x-100"
      >
        {item.title}
      </Link>
    </Fragment>
  ));

  return (
    <div className="flex w-full items-center justify-between pt-5 font-display font-semibold">
      <div className="flex items-center md:gap-[120px]">
        <Link href="/">LOGO</Link>
        <nav className={'hidden md:flex md:gap-7'}>{navItems}</nav>
      </div>
      <div className="inline-flex items-center gap-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={user.image}
            alt="User image"
            fill
            style={{ objectFit: 'cover' }}
          ></Image>
        </div>
        <span className="font-body font-semibold">{user.name}</span>
      </div>
    </div>
  );
}
