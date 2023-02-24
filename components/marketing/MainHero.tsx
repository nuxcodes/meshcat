'use client';
import { easeIn, motion, useScroll, useTransform } from 'framer-motion';
import { ReactElement, useLayoutEffect, useRef, useState } from 'react';

import type { FC } from 'react';
import GameplaySection from './GameplaySection';
import EditorSection from './EditorSection';
import MapSection from './MapSection';

import type { NextComponentType, NextPageContext } from 'next';
import GameIntroSection from './GameIntroSection';
import { cn } from '@/utils/classnames';

interface HeroWrapProps {
  id: number;
  isFirst?: boolean;
  children: ReactElement;
}

const HeroWrap: FC<HeroWrapProps> = ({ isFirst = false, children, id }) => {
  const secRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start end', 'end end'],
  });
  const opacity = isFirst
    ? useTransform(scrollYProgress, [0, 0.3, 0.6, 0.85, 1], [0, 0, 1, 1, 0])
    : useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const tY = isFirst
    ? useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.65, 0.85, 1],
        ['100%', '100%', '20%', '0%', '0%', '-20%'],
      )
    : useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        ['20%', '0%', '0%', '-20%'],
      );
  const z = useTransform(scrollYProgress, (value) =>
    value > 0 && value < 1 ? 10 : -id,
  );

  return (
    <motion.div
      className={cn('relative w-screen', isFirst ? 'h-[150vh]' : 'h-screen')}
      ref={secRef}
    >
      <motion.div
        className="fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
        initial={{ zIndex: -1 }}
        style={{
          zIndex: z,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          style={{
            opacity: opacity,
            translateY: tY,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>

    // initial={{ opacity: 0 }}
    //       style={{
    //         opacity: opacity,
    //         translateY: tY,
    //       }}
  );
};

interface MainHeroProps {}

const MainHero: FC<MainHeroProps> = ({}) => {
  const [isLarge, setIsLarge] = useState(true);

  //   useLayoutEffect(() => {
  //     if (window.matchMedia('(min-width: 1024px)').matches) {
  //       setIsLarge(true);
  //     } else {
  //       setIsLarge(false);
  //     }
  //   });

  return isLarge ? (
    <div>
      <HeroWrap isFirst id={1}>
        <MapSection></MapSection>
      </HeroWrap>
      <HeroWrap id={2}>
        <GameplaySection></GameplaySection>
      </HeroWrap>
      <HeroWrap id={3}>
        <EditorSection></EditorSection>
      </HeroWrap>
    </div>
  ) : (
    <div>
      <MapSection></MapSection>
      <GameplaySection></GameplaySection>
      <EditorSection></EditorSection>
    </div>
  );
};
export default MainHero;
