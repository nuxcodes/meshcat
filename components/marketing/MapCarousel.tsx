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
import items from './MarketSection';
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

  return (
    <div
      className={cn(
        '0.3s inline-block transition-transform ease-in',
        (state.pos[id] < length / 2 - 2 || state.pos[id] > length / 2 + 2) &&
          'opacity-0',
      )}
      style={{
        width: `calc(${itemWidth}rem)`,
        transform: `translateX(${(state.pos[id] - id) * itemWidth}rem)`,
      }}
    >
      <li className={`flex flex-col items-start justify-center gap-2 p-1 `}>
        <img
          src={`${item.player.image}`}
          className="aspect-square w-full object-cover"
          alt="Player"
        ></img>
        <h1>{item.player.title}</h1>
        <p>{item.player.desc}</p>
      </li>
    </div>
  );
};

interface MapCarouselProps {}

const MapCarousel: FC<MapCarouselProps> = ({}) => {
  const state = useContext(CarouselContext);
  const itemWidth = 20;
  const carouselWidth = itemWidth * (state.items.length + 1);

  return (
    <div className="flex h-[500px] w-full items-center justify-center">
      <button onClick={() => state.dispatch({ type: 'jump', payload: -1 })}>
        Prev
      </button>
      <div
        className="relative h-[500px] overflow-hidden"
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
