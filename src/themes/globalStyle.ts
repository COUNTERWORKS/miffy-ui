import { createGlobalStyle } from 'styled-components';
import { MIN_WIDTH } from '@/constants';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
  }
  body {
    position: relative;
    font-family: 'Lato', Hiragino Sans, sans-serif;
    font-feature-settings: "palt";
    font-size: ${({ theme }): number => theme.size.font.text.middle};
    letter-spacing: 0.03em;
    font-size: 14px;
    font-size: 1.4rem;
    line-height: 1.5;
    word-break: break-all;
    word-wrap: break-word;
    color:${({ theme }): string => theme.palette.colorCode.text};
    margin: 0;
  }
  @media (max-width: ${MIN_WIDTH}px) {
    body {
      font-size: 12px;
    }
  }
`;

export default globalStyles;
