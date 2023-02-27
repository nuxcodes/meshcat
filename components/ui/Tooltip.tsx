import { FC, MouseEventHandler, ReactNode, useState } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/utils/classnames';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import Button from './Button';

interface TooltipProps {
  icon: ReactNode;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Tooltip: FC<TooltipProps> = ({ icon, label, onClick }) => {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger onClick={onClick}>
          <div
            className={cn(
              'p-2',
              onClick &&
                'bg-gray-100 hover:bg-berry-200 active:outline-none active:ring active:ring-inset active:ring-blue-300',
            )}
          >
            {icon}
          </div>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          className={cn(
            'animate-in fade-in ease-in',
            'data-[side=bottom]:slide-in-from-top-0.5',
            'data-[side=left]:slide-in-from-right-0.5',
            'data-[side=top]:slide-in-from-bottom-0.5',
            'data-[side=right]:slide-in-from-left-0.5',
            'inline-flex items-center rounded-md px-4 py-2.5',
            'z-50 bg-gray-100 dark:bg-berry-900',
          )}
        >
          <TooltipPrimitive.Arrow className="fill-current text-gray-100 dark:text-berry-900" />
          <span className="block text-xs leading-none text-gray-700 dark:text-gray-100">
            {label}
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
export default Tooltip;
