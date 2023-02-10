import { cn } from '@/utils/classnames';
import { VariantProps, cva } from 'cva';
import type { FC } from 'react';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

interface ButtonProps extends ButtonOrLinkProps, VariantProps<typeof styles> {}

const styles = cva('flex items-center justify-center px-6 py-4 font-semibold', {
  variants: {
    intent: {
      primary:
        'bg-cornflower text-white clip-corner transition-all 0.5s ease-in',
      secondary: 'bg-gray text-white',
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
  ...props
}) => {
  return <ButtonOrLink className={styles({ intent, fullWidth })} {...props} />;
};
export default Button;
