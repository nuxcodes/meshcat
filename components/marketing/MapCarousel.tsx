import Button from '@ui/Button';
import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';
import {
  FC,
  useState,
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  ReactElement,
} from 'react';
import useImmerReducer from 'immer';
import items from './MapSection';
import { stat } from 'fs';
import { CarouselContextProvider, CarouselContext } from './MapCarouselContext';
import { cn } from '@/utils/classnames';

interface CarouselItemProps {
  id: number;
  itemWidth: number;
  key: React.Key;
}

const CarouselItem: FC<CarouselItemProps> = ({ id, itemWidth }) => {
  const state = useContext(CarouselContext);
  const item = state.items[id];
  const length = state.items.length;
  const isActive = state.pos[id] === length / 2;

  return (
    <li
      className={cn(
        'inline-block transition-all duration-[800ms]  ease-in-out',
        (state.pos[id] < length / 2 - 2 || state.pos[id] > length / 2 + 2) &&
          'opacity-0',
      )}
      style={{
        width: `calc(${itemWidth}rem)`,
        transform: `translateX(${
          (state.pos[id] - id) * itemWidth
        }rem) translateY(${isActive ? '0rem' : '2rem'}) scale(${
          isActive ? 1 : 0.65
        })`,
      }}
    >
      <div className={`relative z-10 m-4 h-full w-full`}>
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 overflow-clip bg-transparent px-8 pb-6">
          <img
            src={`${item.player.image}`}
            className="aspect-square w-full object-cover"
            alt="Player"
          ></img>
          <h1>{item.player.title}</h1>
          <p>{item.player.desc}</p>
          <div
            className={cn(
              'absolute top-[8rem] z-[-1] h-[calc(100%-8rem)] w-full rounded-xl p-1 transition-all duration-[600ms] ease-in',
              'bg-gradient-to-b from-[#3956aa] via-[rgba(190,82,242,0.8)_50%] to-[rgba(190,82,242,0)_100%] bg-[length:100%_200%] ',
              isActive ? 'bg-top' : 'bg-bottom',
            )}
          >
            <div className="h-full w-full rounded-xl bg-graphite"></div>
          </div>
        </div>
      </div>
    </li>
  );
};

interface MapCarouselProps {}

const MapCarousel: FC<MapCarouselProps> = ({}) => {
  const state = useContext(CarouselContext);
  const itemWidth = 22;
  const carouselWidth = itemWidth * (state.items.length + 1);

  return (
    <div className="mt-[4rem] flex h-[580px] w-full items-center justify-center">
      <button onClick={() => state.dispatch({ type: 'jump', payload: -1 })}>
        Prev
      </button>
      <div
        className="relative h-full overflow-hidden" // TODO: Adjust width & height display
        style={{ width: `calc(${itemWidth * 3}rem)` }}
      >
        <ul
          className={'absolute left-1/2 h-full translate-x-[-50%] list-none'}
          style={{ width: `calc(${carouselWidth}rem)` }}
        >
          {state.items.map((item, i) => {
            return (
              <CarouselItem key={i} id={i} itemWidth={itemWidth}></CarouselItem>
            );
          })}
        </ul>
      </div>

      <button onClick={() => state.dispatch({ type: 'jump', payload: 1 })}>
        Next
      </button>
    </div>
  );
};

export default MapCarousel;
