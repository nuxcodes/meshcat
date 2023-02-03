import type { FC } from 'react';
import Button from '../ui/Button';

interface GameIntroSectionProps {}

const GameIntroSection: FC<GameIntroSectionProps> = ({}) => {
  return (
    <div className="relative flex h-[200px] items-start justify-start p-4 lg:h-[420px]">
      <div className="flex flex-col items-start gap-4 pt-20 pl-10 lg:max-w-2xl">
        <h1 className="font-display text-xl font-bold md:text-2xl lg:text-3xl">
          Download the Our Game asd oaidu lkasjd oiasud kj aslkd
        </h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus{' '}
        </p>
        <Button>Download our Game</Button>
      </div>
      <div className="h-full w-1/3 bg-slate-800 py-4"></div>
    </div>
  );
};
export default GameIntroSection;
