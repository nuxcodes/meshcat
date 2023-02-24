import type { FC } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/classnames';

interface EditorSectionProps {}

const EditorSection: FC<EditorSectionProps> = ({}) => {
  const items = [
    {
      url: '/images/Editor1.png',
      text: 'Logline This game is about multiple players working as a team, utilizing various camping',
    },
    {
      url: '/images/Editor1.png',
      text: 'Logline This game is about multiple players working as a team, utilizing various camping',
    },
    {
      url: '/images/Editor1.png',
      text: 'Logline This game is about multiple players working as a team, utilizing various camping',
    },
  ];

  return (
    <section className="container flex h-screen min-h-[20rem] w-screen flex-col items-start justify-center">
      <div className="landing-sec-pl">
        <h1 className="landing-sec-heading">CREATE YOUR MAP</h1>
      </div>
      <ul className="mt-[10rem] flex  flex-col items-center justify-center gap-4 px-[15%] md:w-full md:flex-row md:justify-around md:gap-0 md:px-8">
        {items.map((item, i) => (
          <li key={i} className="flex-1">
            <div className="relative z-10 m-4 flex flex-col items-center justify-center gap-4 bg-transparent px-10 pb-8">
              <Image
                src={item.url}
                alt="Player"
                width={300}
                height={300}
              ></Image>
              <p>{item.text}</p>
              <div
                className={cn(
                  'absolute top-[3rem] z-[-1] h-[calc(100%-3rem)] w-full rounded-lg p-1',
                  'bg-gradient-to-b from-[#562E8F]',
                )}
              >
                <div className="h-full w-full rounded-lg bg-graphite"></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default EditorSection;
