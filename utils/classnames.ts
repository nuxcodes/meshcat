// export function cn(...classes: (false | null | undefined | string)[]) {
//   return classes.filter(Boolean).join(' ');
// }

import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
