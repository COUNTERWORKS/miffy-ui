export interface CreatedSizeTheme {
  space: (size: number) => number;
  font: {
    small: number;
    middle: number;
    large: number;
  };
  fontWeight: {
    regular: number;
    demiBold: number;
    bold: number;
  };
}

const defaultFontSize = { small: 12, middle: 14, large: 18 };

const defaultFontWeight = { regular: 400, demiBold: 500, bold: 700 };

export type FontSize = keyof typeof defaultFontSize;

const getSpace = (size: number): number => size * 4;

export const createSize: CreatedSizeTheme = {
  space: getSpace,
  font: defaultFontSize,
  fontWeight: defaultFontWeight,
};
