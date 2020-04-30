import { rgba } from 'polished';

interface PaletteType {
  light: string;
  main: string;
  contrastText: string;
}

export interface MainPaletteTheme {
  adptos: PaletteType;
  primary: PaletteType;
  secondary: PaletteType;
}

export interface CreatedPaletteTheme extends MainPaletteTheme {
  white: string;
  adptBlack: string;
  gray: string;
  base: string;
  common: string;
  error: string;
  lossRed: string;
  benefitBlue: string;
  lightLossRed: string;
  lightBenefitBlue: string;
}

const mainPalette = {
  adptos: {
    light: rgba(228, 0, 110, 0.4),
    main: '#E4006E',
    contrastText: '#FFFFFF',
  },
  primary: {
    light: rgba(8, 132, 150, 0.2),
    main: '#0CA7BD',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: rgba(8, 132, 150, 0.2),
    main: '#293F54',
    contrastText: '#FFFFFF',
  },
};

export const subPalette = {
  white: '#FFFFFF',
  adptBlack: '#050C16',
  gray: '#C4C4C4',
  base: '#DCDEE0',
  common: '#DCDEE0',
  error: '#F55151',
  lossRed: '#DA3616',
  benefitBlue: '#0D5EAD',
  lightLossRed: rgba(218, 54, 22, 0.6),
  lightBenefitBlue: rgba(13, 94, 173, 0.6),
};

export type Color = keyof typeof mainPalette;

export const createPalette: CreatedPaletteTheme = {
  ...mainPalette,
  ...subPalette,
};
