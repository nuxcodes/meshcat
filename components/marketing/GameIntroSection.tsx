import type { FC } from 'react';
import Button from '@ui/Button';
import Image from 'next/image';
import characterPic from '@images/main_character.webp';

interface GameIntroSectionProps {}

const GameIntroSection: FC<GameIntroSectionProps> = ({}) => {
  return (
    <>
      <section className="container relative  flex min-h-[300px] w-full items-center justify-start overflow-x-visible px-4 md:min-h-[calc(100vh-var(--nav-height))] md:items-center">
        <div className="ml-8 flex flex-col items-start gap-6 sm:ml-14 md:min-w-[300px] md:gap-12 lg:ml-[100px] ">
          <h1 className="text-4xl md:text-6xl md:leading-normal lg:text-8xl">
            THE GAME. <br /> NOT <em>A</em> GAME.
          </h1>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button>DOWNLOAD TO PLAY</Button>
            <p className="w-[220px] text-sm">
              Logline This game is about multiple players working as a team,
              utilizing various camping
            </p>
          </div>
        </div>
        <div className=" 3xl:left-[1000px] absolute bottom-0 h-full w-[200px] md:left-[50%] md:w-[1000px] ">
          <Image
            src={characterPic}
            alt=""
            fill
            style={{
              display: 'block',
              objectPosition: 'left bottom',
              objectFit: 'contain',
            }}
          />
        </div>
      </section>
    </>
  );
};

export default GameIntroSection;
