import * as React from 'react';
import { Color } from 'themes/createPalette';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: Color;
  className?: string;
}

export const AnchorBadge: React.FC<Props> = ({ children, color = 'primary', className = '' }) => (
  <Container color={color} className={className}>
    {children}
  </Container>
);

const Container = styled.a<{ color: Color }>`
  position: relative;
  display: inline-block;
  padding: 0 10px;
  border-radius: 100px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrastText};
  font-weight: 800;
  text-decoration: underline;
  &:hover {
    background: ${({ theme, color }) => theme.palette[color].hover};
  }
`;
