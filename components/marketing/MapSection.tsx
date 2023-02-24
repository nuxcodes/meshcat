'use client';

import { FC, useState } from 'react';
import Button from '@ui/Button';
import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';
import MapCarousel from './MapCarousel';
import CarouselContext from './MapCarouselContext';

interface MapSectionProps {}

const MapSection: FC<MapSectionProps> = ({}) => {
  return (
    <section className="container relative flex h-screen w-screen flex-col items-start justify-center">
      <div className="landing-sec-pl">
        <h1 className="landing-sec-heading ">COMMUNITY MAPS</h1>
        <p className="font-display lg:my-8">
          {'Explore and experience exciting maps made by our player community in Marketplace.'.toUpperCase()}
        </p>
      </div>
      <CarouselContext>
        <MapCarousel></MapCarousel>
      </CarouselContext>
    </section>
  );
};
export default MapSection;
