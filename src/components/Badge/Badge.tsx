import * as React from 'react';
import { Color } from 'themes/createPalette';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: Color;
  className?: string;
}

export const Badge: React.FC<Props> = ({ children, color = 'primary', className = '' }) => (
  <Container color={color} className={className}>
    {children}
  </Container>
);

const Container = styled.span<{ color: Color }>`
  position: relative;
  display: inline-block;
  padding: 0 10px;
  border-radius: 100px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrastText};
`;
