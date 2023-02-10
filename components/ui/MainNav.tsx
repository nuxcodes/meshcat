import { FC, Fragment } from 'react';
import Link from 'next/link';

interface MainNavProps {}

const navLinks = [
  { href: '/', title: 'HOME' },
  { href: '/marketplace', title: 'MARKETPLACE' },
  { href: '/editor', title: 'CREATE' },
];

const MainNav: FC<MainNavProps> = ({}) => {
  const navItems = navLinks.map((item) => (
    <Fragment key={item.href}>
      <Link
        href={item.href}
        key={item.href}
        className="after:ease relative my-auto after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-top-left
        after:scale-x-0 after:bg-cornflower after:transition-all after:duration-[400ms] after:content-[''] hover:after:scale-x-100"
      >
        {item.title}
      </Link>
    </Fragment>
  ));

  return (
    <div className="flex items-center font-display font-semibold md:gap-[120px] ">
      <Link href="/">LOGO</Link>
      <nav className={'hidden md:flex md:gap-7'}>{navItems}</nav>
    </div>
  );
};
export default MainNav;
