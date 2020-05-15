import * as React from 'react';
import { Color } from 'themes/createPalette';
import { MIN_WIDTH } from '@/constants';
import styled from 'styled-components';

type AlertColor = Extract<Color, 'success' | 'info' | 'error' | 'caution'>;

interface Props {
  children: React.ReactNode;
  color?: AlertColor;
  className?: string;
  closeIcon?: boolean;
  onClose?: () => void;
}

export const Alert: React.FC<Props> = ({ color = 'info', children, className = '', closeIcon = false, onClose }) => (
  <Container color={color} className={className}>
    {children}
    {closeIcon && <CloseIcon onClick={onClose} />}
  </Container>
);

const Container = styled.div<{ color: AlertColor }>`
  position: relative;
  display: block;
  padding: 12px 16px;
  margin: 16px 0;
  border-radius: 3px;
  font-weight: 300;
  box-sizing: border-box;
  a {
    font-weight: 800;
    text-decoration: underline;
    color: ${({ theme, color }): string => theme.palette[color].contrastText};
  }
  background: ${({ theme, color }): string => theme.palette[color].main};
  color: ${({ theme, color }): string => theme.palette[color].contrastText};
  @media (max-width: ${MIN_WIDTH}px) {
    padding: ${({ theme }): string => `${theme.size.space(2)}px`};
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 21px;
  line-height: 1;
  &:before {
    content: '\f00d';
    font-family: 'Font Awesome 5 Pro';
    font-weight: 300;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media (max-width: ${MIN_WIDTH}px) {
    top: 8px;
    right: 8px;
    font-size: 18px;
  }
`;
