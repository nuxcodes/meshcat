import type { FC } from 'react';
import Button from '../ui/Button';

interface GameIntroSectionProps {}

const GameIntroSection: FC<GameIntroSectionProps> = ({}) => {
  return (
    <div className="relative m-4 flex h-[200px] items-start justify-start lg:h-[420px]">
      <div className="z-20 flex flex-col items-start gap-4 pt-20 pl-10 lg:max-w-2xl">
        <h1 className="font-display text-xl font-bold md:text-2xl lg:text-3xl">
          Labore et Dolore Nisl Tincidunt Eget
        </h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus{' '}
        </p>
        <Button>Download our Game</Button>
      </div>
      <div className="absolute right-4 top-10 aspect-video w-[250px] bg-slate-800 py-4 md:w-[400px] lg:w-[450px] xl:w-1/3"></div>
    </div>
  );
};
export default GameIntroSection;
