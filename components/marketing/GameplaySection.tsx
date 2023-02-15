import type { FC } from 'react';

interface GameplaySectionProps {}

const GameplaySection: FC<GameplaySectionProps> = ({}) => {
  return (
    <section className="container flex h-screen min-h-[20rem] w-full items-center justify-start">
      <div className="aspect-video w-[50%] rounded-lg bg-gray-400"></div>
      <div className="ml-[calc(8%+0.5rem)] flex max-w-[calc(25%-2.25rem)] flex-col items-start gap-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          GAMEPLAY FEATURES
        </h1>
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
