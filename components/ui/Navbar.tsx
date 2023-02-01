import type { FC } from 'react';
import Link from 'next/link';

interface NavbarProps {}

const navLinks = [
  { href: '/', title: 'Home' },
  { href: '/marketplace', title: 'Marketplace' },
  { href: '/editor', title: 'Map Editor' },
];

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className={'hidden md:flex md:gap-6'}>
      {navLinks.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
export default Navbar;
