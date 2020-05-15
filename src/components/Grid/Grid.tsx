import * as React from 'react';
import { MIN_WIDTH } from '@/constants';
import styled, { css, CSSProp } from 'styled-components';

type JustifyContent = 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type Align = 'start' | 'center' | 'end';
type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type Col = 2 | 3 | 4;

interface Props {
  children?: React.ReactNode;
  col?: Col;
  justifyContent?: JustifyContent;
  align?: Align;
  wrap?: Wrap;
  container?: boolean;
  className?: string;
}

export const Grid: React.FC<Props> = ({
  children,
  col,
  justifyContent = 'start',
  align = 'center',
  wrap = 'wrap',
  container = false,
  className = '',
}) => (
  <Container
    col={col}
    justifyContent={justifyContent}
    align={align}
    container={container}
    wrap={wrap}
    className={container ? className : `${className} grid_item`}
  >
    {children}
  </Container>
);

interface ContainerProps {
  col: Col;
  justifyContent: JustifyContent;
  align: Align;
  wrap: Wrap;
  container: boolean;
}

const Container = styled.div<ContainerProps>`
  ${({ col, justifyContent, align, wrap, container }): CSSProp => {
    const getWidth = (col: Col): string => {
      switch (col) {
        case 2:
          return 'calc(100% / 2 - 16px)';
        case 3:
          return 'calc((100% / 3 - 16px) - 0.01px)';
        case 4:
          return 'calc(100% / 4 - 16px)';
        default:
          return '';
      }
    };

    return css`
      ${
        container
          ? css`
              display: flex;
              flex-wrap: ${wrap};
              margin: 0px -8px -16px;
              align-items: ${align};
              justify-content: ${justifyContent};
              .grid_item {
                ${wrap === 'nowrap' && 'margin-bottom: 0'};
                width: ${getWidth(col)};
              }
            `
          : css`
              margin: 0px 8px 16px;
            `
      };
      ${wrap === 'nowrap' && 'margin-bottom: 0'};

      @media (max-width: ${MIN_WIDTH}px) {
        ${
          container
            ? css`
                margin: 0px -4px -8px;
                .grid_item {
                  ${wrap === 'nowrap' && 'margin-bottom: 0'};
                  width: calc(100% / ${col} - 8px);
                }
              `
            : css`
                margin: 0px 4px 8px;
              `
        }
    `;
  }}
`;
