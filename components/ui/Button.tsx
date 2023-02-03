import { cn } from '@/utils/classnames';
import { VariantProps, cva } from 'cva';
import type { ComponentProps, FC, ReactNode } from 'react';

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof styles> {}

const styles = cva('flex items-center justify-center px-4 py-2 font-semibold', {
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
  return <button className={styles({ intent, fullWidth })} {...props} />;
};
export default Button;
