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
    <section className="container relative flex h-screen flex-col items-start justify-center">
      <h1 className="text-2xl md:text-4xl md:leading-normal lg:text-5xl xl:text-6xl">
        COMMUNITY MAPS
      </h1>
      <p className="lg:my-8 ">
        Expolore and experience exciting maps made by our player community in
        Marketplace.
      </p>
      <CarouselContext>
        <MapCarousel></MapCarousel>
      </CarouselContext>
    </section>
  );
};
export default MapSection;
