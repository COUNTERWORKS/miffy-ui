import * as React from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'themes/createPalette';

export type Size = 'auto' | 'large' | 'normal';

interface Props {
  children: React.ReactNode;
  size?: Size;
  color?: Color;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  formAdjacent?: boolean;
  className?: string;
}

export const BaseButton: React.FC<Props> = ({
  children,
  size = null,
  color = 'primary',
  onClick = () => null,
  formAdjacent = false,
  className = '',
}) => (
  <Container color={color} size={size} onClick={onClick} formAdjacent={formAdjacent} className={className}>
    {children}
  </Container>
);

const Container = styled.button<{ color: Color; size: Size; formAdjacent: boolean }>`
  display: block;
  padding: ${({ formAdjacent }) => (formAdjacent ? '8px 24px' : '12px 24px')};
  margin: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-size: ${({ theme }) => theme.size.font.text.middle}px;
  font-weight: ${({ theme }) => theme.weight.bold};
  text-align: center;
  border: solid 1px transparent;
  outline: none;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  ${({ size }) => {
    switch (size) {
      case 'auto':
        return css`
          display: inline-block;
          width: auto;
        `;
      case 'normal':
        return css`
          width: 240px;
        `;
      case 'large':
        return css`
          width: 400px;
        `;
      default:
        return css`
          width: 100%;
        `;
    }
  }}
`;
