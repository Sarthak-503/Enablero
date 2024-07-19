import { Palette, PaletteOptions, alpha } from '@mui/material/styles';
import { black, error, green, white } from './colors';

type CommonColors = {
  black: string;
  white: string;
};

type SecondaryPalette = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
};

type PaletteAugmentColorOptions = {
  color: string;
};

type AugmentColorFunction = (
  options: PaletteAugmentColorOptions
) => SecondaryPalette;

interface CustomPalette extends PaletteOptions {
  common: CommonColors;
  secondary: SecondaryPalette;
  getContrastText: (background: string) => string;
  augmentColor: AugmentColorFunction;
  mode: 'light' | 'dark';
}

export function createPalette(): Palette {
  const getContrastText = (background: string): string => {
    const lightTextColor = black.main;
    const darkTextColor = white.main;
    const contrastThreshold = 0.5;

    const luminance = (color: string) => {
      const rgb = parseInt(color.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      return (r * 0.299 + g * 0.587 + b * 0.114) / 255;
    };

    const bgLuminance = luminance(background);
    return bgLuminance > contrastThreshold ? lightTextColor : darkTextColor;
  };

  const augmentColor: AugmentColorFunction = (options) => {
    const mainColor = options.color;
    return {
      main: mainColor,
      light: alpha(mainColor, 0.7),
      dark: alpha(mainColor, 0.3),
      contrastText: getContrastText(mainColor),
    };
  };

  const customPalette: CustomPalette = {
    common: {
      black: black.main,
      white: white.main,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    action: {
      active: green.main,
      disabled: alpha(black.main, 0.38),
      disabledBackground: alpha(black.main, 0.12),
      focus: alpha(black.main, 0.16),
      hover: alpha(black.main, 0.04),
      selected: alpha(black.main, 0.12),
    },
    background: {
      default: white.main,
      paper: white.main,
    },
    divider: '#F2F4F7',
    mode: 'light',
    primary: {
      main: green.main,
      light: green.light,
      dark: green.dark,
      contrastText: green.contrastText,
    },
    secondary: {
      main: black.main,
      light: black.light,
      dark: black.dark,
      contrastText: black.contrastText,
    },
    error: {
      main: error.main,
      light: error.light,
      dark: error.dark,
      contrastText: error.contrastText,
    },
    text: {
      primary: black.main,
      secondary: black.main,
      disabled: alpha(black.main, 0.38),
    },
    getContrastText,
    augmentColor,
  };

  return customPalette as Palette;
}
