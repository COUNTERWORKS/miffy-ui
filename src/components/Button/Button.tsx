import { ReactNode, MouseEventHandler, forwardRef } from 'react';
import clsx from 'clsx';

export const Button = forwardRef<
  HTMLButtonElement,
  {
    color: 'primary' | 'secondary' | 'newtral' | 'light' | 'danger';
    size?: 'auto' | 'normal' | 'large';
    form?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit';
    disabled?: boolean;
    children: ReactNode;
  }
>(
  (
    { color, className, onClick, children, type = 'button', form = false, size='auto', disabled = false, ...props },
    ref
  ) => (
    <button
      className={clsx(
        'c-button',
        !disabled && `c-button--${color}`,
        size && `c-button--${size}`,
        form && 'c-button--formAdjacent',
        disabled && 'c-button--disabled',
        className
      )}
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
);
