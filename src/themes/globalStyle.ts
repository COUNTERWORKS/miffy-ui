import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset}
  body {
    background-color: ${({ theme }) => theme.palette.base};
    position: relative;
    font-family: Gill Sans, Noto Sans, sans-serif;
    letter-spacing: 0.03em;
    line-height: 1.5;
    word-break: break-all;
    word-wrap: break-word;
    margin: 0;
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }
`;

export default globalStyles;
