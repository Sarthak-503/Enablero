import { alpha } from '@mui/material/styles';

type Color = {
  lightest: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrastText: string;
  alpha4?: string;
  alpha8?: string;
  alpha12?: string;
  alpha30?: string;
  alpha50?: string;
};

const withAlphas = (color: Color): Color => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const neutral: Record<number, string> = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#111927',
};

export const green: Color = withAlphas({
  lightest: '#E8F5E9',
  light: '#81C784',
  main: '#4CAF50',
  dark: '#388E3C',
  darkest: '#1B5E20',
  contrastText: '#FFFFFF',
});

export const black: Color = withAlphas({
  lightest: '#E0E0E0',
  light: '#BDBDBD',
  main: '#000000',
  dark: '#212121',
  darkest: '#000000',
  contrastText: '#FFFFFF',
});
export const white: Color = withAlphas({
  lightest: '#FFFFFF',
  light: '#FFFFFF',
  main: '#FFFFFF',
  dark: '#F5F5F5',
  darkest: '#E0E0E0',
  contrastText: '#000000',
});

export const success: Color = withAlphas({
  lightest: '#F0FDF9',
  light: '#3FC79A',
  main: '#10B981',
  dark: '#0B815A',
  darkest: '#134E48',
  contrastText: '#FFFFFF',
});

export const info: Color = withAlphas({
  lightest: '#ECFDFF',
  light: '#CFF9FE',
  main: '#06AED4',
  dark: '#0E7090',
  darkest: '#164C63',
  contrastText: '#FFFFFF',
});

export const warning: Color = withAlphas({
  lightest: '#FFFAEB',
  light: '#FEF0C7',
  main: '#F79009',
  dark: '#B54708',
  darkest: '#7A2E0E',
  contrastText: '#FFFFFF',
});

export const error: Color = withAlphas({
  lightest: '#FEF3F2',
  light: '#FEE4E2',
  main: '#F04438',
  dark: '#B42318',
  darkest: '#7A271A',
  contrastText: '#FFFFFF',
});
