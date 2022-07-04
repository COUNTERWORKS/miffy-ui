import { FC, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

export const OutlineButton: FC<{
  color: 'primary' | 'secondary' | 'newtral' | 'light' | 'danger';
  size?: 'auto' | 'normal' | 'large';
  form?: boolean;
  className?: string;
  auto?: boolean;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: ReactNode;
}> = ({ color, className, onClick, children, type = 'button', size = 'auto', disabled = false, form = false, ...props }) => (
  <button
    className={clsx(
      'c-outlineButton',
      !disabled && `c-outlineButton--${color}`,
      size && `c-outlineButton--${size}`,
      form && 'c-outlineButton--formAdjacent',
      disabled && 'c-outlineButton--disabled',
      className
    )}
    type={type}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);
