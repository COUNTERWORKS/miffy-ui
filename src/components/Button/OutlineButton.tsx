import * as React from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'themes/createPalette';
import { BaseButton, Size } from './BaseButton';

type ButtonColor = Extract<Color, 'primary' | 'secondary' | 'newtral'>;

interface Props {
  children: React.ReactNode;
  size?: Size;
  color?: ButtonColor;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
}

export const OutlineButton: React.FC<Props> = ({ children, color = 'primary', ...props }) => (
  <StyledButton color={color} {...props}>
    {children}
  </StyledButton>
);

const StyledButton = styled(BaseButton)<{ color: Color }>`
  ${({ theme, color }) => {
    return css`
      color: ${theme.palette[color].main};
      border-color: ${theme.palette[color].main};
      background: ${({ theme }) => theme.palette.colorCode.white};
      :hover {
        color: ${theme.palette[color].contrastText};
        background: ${theme.palette[color].main};
      }
    `;
  }}
`;
