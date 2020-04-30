import { CreatedPaletteTheme, createPalette } from './createPalette';
import { CreatedSizeTheme, createSize } from './createSize';

export interface CreatedTheme {
  palette: CreatedPaletteTheme;
  size: CreatedSizeTheme;
}

export const createTheme = {
  palette: createPalette,
  size: createSize,
};
