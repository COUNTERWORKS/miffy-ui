import 'styled-components';
import { CreatedTheme } from '../themes/createTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CreatedTheme {}
}
