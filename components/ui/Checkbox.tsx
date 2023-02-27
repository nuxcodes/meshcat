import { FC, useId } from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { RxCheck } from 'react-icons/rx/';

interface CheckboxProps {
  value: boolean;
  label: string;
  onCheckedChange: (...args: any[]) => void;
}

const Checkbox: FC<CheckboxProps> = ({ value, label, onCheckedChange }) => {
  const id = useId();
  return (
    <form className="flex items-center">
      <CheckboxPrimitive.Root
        className="mr-2 flex h-5 w-5 items-center justify-center rounded border-2 disabled:cursor-not-allowed
           disabled:opacity-50 data-[state=checked]:border-none data-[state=unchecked]:border-slate-300  data-[state=checked]:bg-berry
            data-[state-unchecked]:bg-white"
        checked={value}
        id={id}
        onCheckedChange={() => onCheckedChange()}
      >
        <CheckboxPrimitive.Indicator>
          <RxCheck className="h-4 w-4 text-white"></RxCheck>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Label.Root htmlFor={id}>{label}</Label.Root>
    </form>
  );
};
export default Checkbox;
