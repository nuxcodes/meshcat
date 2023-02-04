import { ComponentProps } from 'react';
import Link from 'next/link';

type Props = ComponentProps<'button'> & ComponentProps<'a'>;

export interface ButtonOrLinkProps extends Props {}

export function ButtonOrLink({ href, ...props }: ButtonOrLinkProps) {
  const isLink = typeof href !== 'undefined';
  const ButtonOrLink = isLink ? 'a' : 'button';

  let content = <ButtonOrLink {...props} />;

  if (isLink) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
