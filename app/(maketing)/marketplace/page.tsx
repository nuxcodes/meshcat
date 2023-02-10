import type { FC } from 'react';

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <>
      <div className="h-[300px] w-full bg-cornflower-300 p-5">
        <div className="flex h-full flex-col items-start justify-center gap-4 pb-4">
          <h1 className="font-display text-3xl font-bold">Browse Maps</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus
          </p>
        </div>
      </div>
      <div className="flex h-full w-full flex-1 flex-col justify-start p-6">
        <h2 className="font-display text-2xl font-semibold">All Maps</h2>
        <div className="grid"></div>
      </div>
    </>
  );
};
export default Page;
