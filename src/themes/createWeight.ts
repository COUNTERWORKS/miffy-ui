export interface CreatedWeightTheme {
  regular: number;
  demiBold: number;
  bold: number;
}

const defaultFontWeight = { regular: 400, demiBold: 500, bold: 700 };

export const createWeight: CreatedWeightTheme = {
  ...defaultFontWeight,
};
