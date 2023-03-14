import { FC, Fragment } from 'react';
import Link from 'next/link';
import Button from './Button';

interface MainNavProps {}

const navLinks = [
  { href: '/', title: 'HOME' },
  { href: '/marketplace', title: 'MARKETPLACE' },
  { href: '/create', title: 'CREATE' },
];

const MainNav: FC<MainNavProps> = ({}) => {
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
      <Button intent="outline" className="font-display text-sm" href="/signin">
        SIGN IN
      </Button>
    </div>
  );
};
export default MainNav;
