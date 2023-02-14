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

const _items = [
  {
    player: {
      title: 'Efren Reyes',
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
    },
  },
  {
    player: {
      title: 'Shane Van Boening',
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
    },
  },
  {
    player: {
      title: 'Mike Sigel',
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
    },
  },
  {
    player: {
      title: 'Willie Mosconi',
      desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
    },
  },
];

_items.push(..._items);

type CarouselType = {
  items: {
    player: { title: String; desc: String; image: String };
  }[];
  currentIdx: number;
  pos: Array<number>;
};

type CarouselActionType = { type: 'jump'; payload: number };

interface CarouselContextType extends CarouselType {
  dispatch: Dispatch<CarouselActionType>;
}

const initState: CarouselType = {
  items: _items,
  currentIdx: 1,
  pos: Array.from(_items.keys()),
  //   currentIdx: Math.floor(_items.length / 2),
};

const carouselReducer = (
  state: CarouselType,
  action: CarouselActionType,
): CarouselType => {
  let length = _items.length;
  switch (action.type) {
    case 'jump':
      return {
        ...state,
        currentIdx: (state.currentIdx + action.payload + length) % length,
        pos: state.pos.map((val) => (val + action.payload + length) % length),
      };
    default:
      return { ...state };
  }
};

export const CarouselContext = createContext<CarouselContextType>(
  initState as CarouselContextType,
);

export const CarouselContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [state, dispatch] = useReducer(carouselReducer, initState);
  return (
    <CarouselContext.Provider value={{ ...state, dispatch: dispatch }}>
      {children}
    </CarouselContext.Provider>
  );
};

export default CarouselContextProvider;
