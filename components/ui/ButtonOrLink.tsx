import { ComponentProps } from 'react';
import Link from 'next/link';

type Props = ComponentProps<'button'> & ComponentProps<'a'>;

export interface ButtonOrLinkProps extends Props {}

export function ButtonOrLink({ href, target, ...props }: ButtonOrLinkProps) {
  const isLink = typeof href !== 'undefined';
  const ButtonOrLink = 'button';

  let content = <ButtonOrLink {...props} />;

  if (isLink) {
    return (
      <Link href={href} target={target}>
        {content}
      </Link>
    );
  }

  return content;
}
