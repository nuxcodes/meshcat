import React, { FC, ReactNode, useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import Tooltip from './Tooltip';
import { FiChevronDown } from 'react-icons/fi/';
import { IoIosClose } from 'react-icons/io/';
import { ViewportShading } from '../editor/store';
import { cn } from '@/utils/classnames';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuItem = DropdownMenuPrimitive.Item;

const DropdownMenuContent = ({
  className,
  children,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => {
  return (
    <DropdownMenuPrimitive.Content
      sideOffset={5}
      className={cn(
        'animate-in fade-in ease-in data-[side=top]:slide-in-from-bottom-1 data-[side=bottom]:slide-in-from-top-1',
        'z-40 flex flex-col items-start justify-start gap-3 rounded-lg bg-white p-4 shadow-md',
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  );
};
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
};
