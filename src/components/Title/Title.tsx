import * as React from 'react';
import { TitleSize } from 'themes/createSize';
import { MIN_WIDTH } from '@/constants';
import styled, { css, CSSProp } from 'styled-components';

interface Props {
  children: React.ReactNode;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  size?: TitleSize;
  className?: string;
}

export const Title: React.FC<Props> = ({ children, tag, size = 'regular', className = '' }) => (
  <Heading as={tag} size={size} className={className}>
    {children}
  </Heading>
);

const Heading = styled.h1<{ size: TitleSize }>`
  ${({ theme, size }): CSSProp => {
    const { title } = theme.size.font;
    const { weight } = theme;

    return css`
      font-size: ${title.pc[size]}px;
      font-weight: ${weight.demiBold};
      margin-bottom: ${size === 'xlarge' ? 48 : 24}px;
      @media (max-width: ${MIN_WIDTH}px) {
        font-size: ${title.sp[size]}px;
        margin-bottom: ${size === 'xlarge' ? 32 : 16}px;
      }
    `;
  }}
`;
