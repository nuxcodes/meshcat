import React, { FC, ReactNode, useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import Tooltip from './Tooltip';
import { FiChevronDown } from 'react-icons/fi/';
import { IoIosClose } from 'react-icons/io/';
import { ViewportShading } from '../editor/store';
import { cn } from '@/utils/classnames';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = ({
  className,
  children,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) => {
  return (
    <PopoverPrimitive.Content
      align="center"
      sideOffset={5}
      className={cn(
        'animate-in ease-in data-[side=top]:slide-in-from-bottom-1 data-[side=bottom]:slide-in-from-top-1',
        'z-40 w-[30rem] rounded-lg bg-white p-4 shadow-md',
      )}
      {...props}
    >
      {children}
      <PopoverPrimitive.Close
        className={cn(
          'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
          'focus:outline-none focus-visible:ring focus-visible:ring-berry-500 focus-visible:ring-opacity-75',
        )}
        aria-label="Close"
      >
        <IoIosClose className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
      </PopoverPrimitive.Close>
      <PopoverPrimitive.Arrow className="fill-current" />
    </PopoverPrimitive.Content>
  );
};
export { Popover, PopoverTrigger, PopoverContent };
