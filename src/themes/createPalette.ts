import { lighten, darken } from 'polished';

interface PaletteType {
  hover: string;
  main: string;
  contrastText: string;
}

export interface PaletteTheme {
  primary: PaletteType;
  secondary: PaletteType;
  info: PaletteType;
  success: PaletteType;
  caution: PaletteType;
  error: PaletteType;
  newtral: PaletteType;
  light: PaletteType;
}

interface ColorLevel {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface ColorCode {
  primary: string;
  secondary: string;
  gray: ColorLevel;
  blue: ColorLevel;
  green: ColorLevel;
  orange: ColorLevel;
  red: ColorLevel;
  facebook: string;
  twitter: string;
  hatena: string;
  line: string;
  authBase: string;
  white: string;
  black: string;
  border: string;
  text: string;
  textGray: string;
}

const colorCode: ColorCode = {
  primary: '#ff4a1a',
  secondary: '#0d6780',
  gray: {
    100: '#f5f5f5',
    200: '#ddd',
    300: darken(0.1, '#ddd'),
    400: darken(0.2, '#ddd'),
    500: '#8e8e8e',
    600: darken(0.4, '#ddd'),
    700: '#414141',
    800: darken(0.6, '#ddd'),
    900: darken(0.7, '#ddd'),
  },
  blue: {
    100: lighten(0.1, '#cbe2ee'),
    200: '#cbe2ee',
    300: darken(0.1, '#cbe2ee'),
    400: darken(0.2, '#cbe2ee'),
    500: darken(0.3, '#cbe2ee'),
    600: darken(0.4, '#cbe2ee'),
    700: darken(0.5, '#cbe2ee'),
    800: darken(0.6, '#cbe2ee'),
    900: darken(0.7, '#cbe2ee'),
  },
  green: {
    100: lighten(0.1, '#c6edcf'),
    200: '#c6edcf',
    300: darken(0.1, '#c6edcf'),
    400: darken(0.2, '#c6edcf'),
    500: darken(0.3, '#c6edcf'),
    600: darken(0.4, '#c6edcf'),
    700: darken(0.5, '#c6edcf'),
    800: darken(0.6, '#c6edcf'),
    900: darken(0.7, '#c6edcf'),
  },
  orange: {
    100: lighten(0.1, '#f3ddba'),
    200: '#f3ddba',
    300: darken(0.1, '#f3ddba'),
    400: darken(0.2, '#f3ddba'),
    500: darken(0.3, '#f3ddba'),
    600: darken(0.4, '#f3ddba'),
    700: darken(0.5, '#f3ddba'),
    800: darken(0.6, '#f3ddba'),
    900: darken(0.7, '#f3ddba'),
  },
  red: {
    100: lighten(0.1, '#f6d0cd'),
    200: '#f6d0cd',
    300: darken(0.1, '#f6d0cd'),
    400: darken(0.2, '#f6d0cd'),
    500: darken(0.3, '#f6d0cd'),
    600: darken(0.4, '#f6d0cd'),
    700: darken(0.5, '#f6d0cd'),
    800: darken(0.6, '#f6d0cd'),
    900: darken(0.7, '#f6d0cd'),
  },
  facebook: '#3b5998',
  twitter: '#1DA1F2',
  hatena: '#008fde',
  line: '#00c300',
  authBase: '#29836f',
  white: '#fff',
  black: '#000',
  border: '#ddd', // gray-200
  text: '#414141', // gray-700
  textGray: '#8e8e8e', // gray-500
};

const paletteTheme: PaletteTheme = {
  primary: {
    main: colorCode.primary,
    hover: lighten(0.05, colorCode.primary),
    contrastText: colorCode.white,
  },
  secondary: {
    main: colorCode.secondary,
    hover: lighten(0.05, colorCode.secondary),
    contrastText: colorCode.white,
  },
  info: {
    main: colorCode.blue[200],
    hover: darken(0.1, colorCode.blue[200]),
    contrastText: colorCode.blue[700],
  },
  success: {
    main: colorCode.green[200],
    hover: darken(0.1, colorCode.green[200]),
    contrastText: colorCode.green[700],
  },
  caution: {
    main: colorCode.orange[200],
    hover: darken(0.1, colorCode.orange[200]),
    contrastText: colorCode.orange[700],
  },
  error: {
    main: colorCode.red[200],
    hover: darken(0.1, colorCode.red[200]),
    contrastText: colorCode.red[700],
  },
  newtral: {
    main: colorCode.gray[500],
    hover: lighten(0.1, colorCode.gray[500]),
    contrastText: colorCode.white,
  },
  light: {
    main: colorCode.white,
    hover: colorCode.white,
    contrastText: colorCode.gray[700],
  },
};

export type Color = keyof typeof paletteTheme;

export interface CreatedPaletteTheme extends PaletteTheme {
  colorCode: ColorCode;
}

export const createPalette: CreatedPaletteTheme = {
  colorCode,
  ...paletteTheme,
};
