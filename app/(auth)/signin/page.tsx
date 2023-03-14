import SigninForm from '@/components/SigninForm';
import Link from 'next/link';
import type { FC } from 'react';
import { BiChevronLeft } from 'react-icons/bi';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent py-2 px-3 text-center text-sm  font-medium hover:bg-berry-800 focus:z-10 focus:outline-none focus:ring-4 focus:ring-berry-800 md:top-8 md:left-8"
      >
        <>
          <BiChevronLeft className="mr-2 h-6 w-6" />
          BACK
        </>
      </Link>
      <div className="flex flex-col items-center sm:w-[20rem]">
        <h1 className="mb-8 text-lg">SIGN IN TO PIXLPLAY</h1>
        <SigninForm></SigninForm>
      </div>
    </div>
  );
};
export default page;
