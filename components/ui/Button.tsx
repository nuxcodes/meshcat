import { cn } from '@/utils/classnames';
import { VariantProps, cva } from 'cva';
import type { FC } from 'react';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

export interface ButtonProps
  extends ButtonOrLinkProps,
    VariantProps<typeof styles> {}

const styles = cva('flex items-center justify-center font-semibold font-body', {
  variants: {
    intent: {
      gradient:
        'px-6 py-4 bg-gradient-to-r from-berry via-fountain to-violet rounded-lg transition-all bg-[length:200%_100%] bg-left hover:bg-right duration-[200ms] ease-in',
      primary: 'px-4 py-2 bg-berry text-white rounded-md',
      outline:
        'px-[3rem] py-3 bg-transparent rounded-md border border-slate-50 hover:opacity-80 transition-opacity ease duration-[150ms]',
      danger: 'bg-red text-white',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
});

const Button: FC<ButtonProps> = ({
  intent = 'primary',
  fullWidth,
  className,
  ...props
}) => {
  return (
    <ButtonOrLink
      className={cn(styles({ intent, fullWidth }), className)}
      {...props}
    />
  );
};
export default Button;
