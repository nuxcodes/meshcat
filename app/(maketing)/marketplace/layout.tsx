import Navbar from '@/components/ui/MainNav';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return <>{children}</>;
};
export default layout;
