import type { FC } from 'react';
import Button from '../ui/Button';

interface GameIntroSectionProps {}

const GameIntroSection: FC<GameIntroSectionProps> = ({}) => {
  return (
    <div className="flex h-[200px] w-full flex-col items-center bg-red-300 lg:h-[380px]">
      <img className="" src="" alt="" />
      <div className="relative top-0 left-0 h-2/3 w-full bg-green-200"></div>
      <div className="relative top-5 flex flex-col items-center">
        <Button>Download our Game</Button>
      </div>
    </div>
  );
};
export default GameIntroSection;
