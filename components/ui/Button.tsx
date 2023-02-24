import { cn } from '@/utils/classnames';
import { VariantProps, cva } from 'cva';
import type { FC } from 'react';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

export interface ButtonProps
  extends ButtonOrLinkProps,
    VariantProps<typeof styles> {}

const styles = cva('flex items-center justify-center px-6 py-4 font-semibold', {
  variants: {
    intent: {
      gradient:
        'bg-gradient-to-r from-berry via-fountain to-violet rounded-lg transition-all bg-[length:200%_100%] bg-left hover:bg-right duration-[200ms] ease-in',
      primary: 'bg-berry text-white clip-corner transition-all 0.5s ease-in',
      secondary: 'bg-gray text-white',
      danger: 'bg-red text-white',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
});

const Button: FC<ButtonProps> = ({
  intent = 'gradient',
  fullWidth,
  ...props
}) => {
  return <ButtonOrLink className={styles({ intent, fullWidth })} {...props} />;
};
export default Button;
