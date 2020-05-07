import { CreatedPaletteTheme, createPalette } from './createPalette';
import { CreatedSizeTheme, createSize } from './createSize';
import { CreatedWeightTheme, createWeight } from './createWeight';

export interface CreatedTheme {
  palette: CreatedPaletteTheme;
  size: CreatedSizeTheme;
  weight: CreatedWeightTheme;
}

export const createTheme = {
  palette: createPalette,
  size: createSize,
  weight: createWeight,
};
