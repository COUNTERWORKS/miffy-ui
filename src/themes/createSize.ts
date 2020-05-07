export interface CreatedSizeTheme {
  space: (size: number) => number;
  font: {
    text: {
      small: number;
      middle: number;
      large: number;
    };
    title: {
      pc: {
        xlarge: number;
        large: number;
        regular: number;
        small: number;
      };
      sp: {
        xlarge: number;
        large: number;
        regular: number;
        small: number;
      };
    };
  };
}

const defaultFontSize = { small: 12, middle: 14, large: 18 };

const defaultTitle = {
  pc: {
    xlarge: 42,
    large: 30,
    regular: 24,
    small: 18,
  },
  sp: {
    xlarge: 30,
    large: 24,
    regular: 18,
    small: 12,
  },
};

export type TitleSize = 'xlarge' | 'large' | 'regular' | 'small';
export type FontSize = keyof typeof defaultFontSize;

const getSpace = (size: number): number => size * 4;

export const createSize: CreatedSizeTheme = {
  space: getSpace,
  font: {
    text: defaultFontSize,
    title: defaultTitle,
  },
};
