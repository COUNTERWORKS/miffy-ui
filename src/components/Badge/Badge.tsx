import { FC } from 'react';
import clsx from 'clsx';

export const Badge: FC<
  {
    text: string;
    color: 'info' | 'success' | 'caution' | 'error' | 'primary' | 'secondary' | 'newtral' | 'light';
    className?: string;
  }
> = ({ text, color, className, ...props }) => (
  <span
    className={clsx(
      'c-badge',
      color && `c-badge--${color}`,
      className
    )}
    {...props}
  >
    {text}
  </span>
);
