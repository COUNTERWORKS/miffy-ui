import * as React from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'themes/createPalette';
import { BaseButton, Size } from './BaseButton';

type ButtonColor = Extract<Color, 'primary' | 'secondary' | 'newtral' | 'light'>;

interface Props {
  children: React.ReactNode;
  size?: Size;
  color?: ButtonColor;
  formAdjacent?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Button: React.FC<Props> = ({ children, color = 'primary', ...props }) => (
  <StyledButton color={color} {...props}>
    {children}
  </StyledButton>
);

const StyledButton = styled(BaseButton)<{ color: Color }>`
  ${({ theme, color }) => {
    return css`
      background: ${theme.palette[color].main};
      border-color: ${theme.palette[color].main};
      color: ${theme.palette[color].contrastText};
      :hover {
        background: ${theme.palette[color].hover};
      }
    `;
  }}
`;
