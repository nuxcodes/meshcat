import type { FC } from 'react';
import video from '@images/Video.webp';
import Image from 'next/image';

interface GameplaySectionProps {}

const GameplaySection: FC<GameplaySectionProps> = ({}) => {
  return (
    <section className="container flex h-screen min-h-[20rem] w-screen flex-col items-start justify-center md:flex-row md:items-center md:justify-start">
      <div className="landing-sec-pl w-[50%] min-w-[25rem]">
        <Image
          src={video}
          alt="Gameplay Footage"
          style={{ objectFit: 'contain', objectPosition: 'top left' }}
        ></Image>
      </div>
      <div className="ml-[calc(8%+0.5rem)] flex flex-col items-start gap-12 md:max-w-[calc(20rem-5%)]">
        <h1 className="landing-sec-heading">GAMEPLAY FEATURES</h1>
        <div className="rounded-md bg-gradient-to-r from-[#1776b1] to-[#000000_40%] p-8 text-sm">
          <p>
            Logline This game is about multiple players working as a team,
            utilizing various camping
            <br />
            <br />
            Logline This game is about multiple players working as a team,
            utilizing various camping
          </p>
        </div>
      </div>
    </section>
  );
};
export default GameplaySection;
