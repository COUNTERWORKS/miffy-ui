import { ReactNode, MouseEventHandler, forwardRef } from 'react';
import clsx from 'clsx';

export const Button = forwardRef<
  HTMLButtonElement,
  {
    color: 'primary' | 'secondary' | 'newtral' | 'light';
    size?: 'auto' | 'normal' | 'large';
    form?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit';
    auto?: boolean;
    disabled?: boolean;
    children: ReactNode;
  }
>(
  (
    { color, size, form = false, className, onClick, children, type = 'button', disabled = false, auto = false },
    ref
  ) => (
    <button
      className={clsx(
        'c-button',
        !disabled && `c-button--${color}`,
        size && `c-button--${size}`,
        form && 'c-button--formAdjacent',
        disabled && 'c-button--disabled',
        auto && 'c-outlineButton--auto',
        className
      )}
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
);
