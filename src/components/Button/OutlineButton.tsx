import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';

export const OutlineButton: FC<{
  color: 'primary' | 'secondary' | 'newtral';
  size?: 'auto' | 'normal' | 'large';
  form?: boolean;
  className?: string;
  auto?: boolean;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}> = ({ color, size, form = false, className, onClick, children, type = 'button', disabled = false, auto = false }) => (
  <button
    className={clsx(
      'c-outlineButton',
      !disabled && `c-outlineButton--${color}`,
      size && `c-outlineButton--${size}`,
      form && 'c-outlineButton--formAdjacent',
      disabled && 'c-outlineButton--disabled',
      auto && 'c-outlineButton--auto',
      className
    )}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
