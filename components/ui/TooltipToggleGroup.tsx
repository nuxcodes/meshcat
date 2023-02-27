import { FC, ReactNode, useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import Tooltip from './Tooltip';
import { FiChevronDown } from 'react-icons/fi/';
import { IoIosClose } from 'react-icons/io/';
import { ViewportShading } from '../editor/store';
import { cn } from '@/utils/classnames';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

interface Options {
  icon: ReactNode;
  label: string;
  option: string;
}

interface TooltipToggleGroupProps {
  options: Options[];
  value: string;
  onChange: (value: string) => void;
  settingsPanel?: ReactNode;
}

const TooltipToggleGroup: FC<TooltipToggleGroupProps> = ({
  options,
  value,
  onChange,
  settingsPanel,
}) => {
  return (
    <ToggleGroup.Root
      className="flex items-center justify-center"
      type="single"
      value={value}
      aria-label="Text alignment"
      onValueChange={(val) => {
        if (val && val != 'settings' && val != value) onChange(val);
        console.log(val);
      }}
    >
      {options.map(({ icon, label, option }) => {
        return (
          <ToggleGroup.Item
            key={option}
            value={option}
            aria-label={label}
            asChild
          >
            <div className="flex items-center justify-center bg-gray-100 hover:bg-berry-100 data-[state='on']:bg-berry data-[state='on']:text-white">
              {' '}
              <Tooltip icon={icon} label={label}></Tooltip>
            </div>
          </ToggleGroup.Item>
        );
      })}
      {settingsPanel && (
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex">
              <Tooltip
                icon={<FiChevronDown />}
                label={'Viewport Settings'}
                onClick={() => {}}
              ></Tooltip>
            </div>
          </PopoverTrigger>
          <PopoverContent>{settingsPanel}</PopoverContent>
        </Popover>
      )}
    </ToggleGroup.Root>
  );
};
export default TooltipToggleGroup;
