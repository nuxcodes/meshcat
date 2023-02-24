import type { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="relative mx-auto flex h-full w-full justify-start overflow-hidden bg-white text-black">
      {children}
    </main>
  );
};
export default layout;
