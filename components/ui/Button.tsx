import { cn } from '@/utils/classnames';
import type { FC, ReactNode } from 'react';

interface ButtonProps {
  variant?: Variants;
  children: ReactNode;
}

type Variants = 'primary' | 'secondary' | 'danger';

const styles: Record<Variants, String> = {
  primary: 'bg-purple-300 text-white',
  secondary: 'bg-gray text-white',
  danger: 'bg-red text-white',
};

const Button: FC<ButtonProps> = ({ variant = 'primary', children }) => {
  return (
    <button className={cn('rounded-md p-2 font-semibold', styles[variant])}>
      {children}
    </button>
  );
};
export default Button;
