type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

type TypographyStyle = {
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: string;
  textTransform?: TextTransform;
  fontFamily?: string;
  color?: string;
  textDecoration?: string;
};

type Typography = {
  fontFamily: string;
  body1: TypographyStyle;
  body2: TypographyStyle;
  button: TypographyStyle;
  caption: TypographyStyle;
  subtitle1: TypographyStyle;
  subtitle2: TypographyStyle;
  overline: TypographyStyle;
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  h4: TypographyStyle;
  h5: TypographyStyle;
  h6: TypographyStyle;
};

export const createTypography = (): Typography => {
  return {
    fontFamily:
      'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#000000',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      color: '#000000',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.4,
      color: '#000000',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#000000',
    },

    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.6,
      color: '#000000',
    },

    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.7,
      color: '#000000',
    },

    body1: {
      fontWeight: 400,
      lineHeight: 1.75,
      fontSize: '1rem',
      color: '#000000',
    },

    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      color: '#000000',
    },

    button: {
      fontWeight: 600,
      textTransform: 'uppercase',
      fontSize: '0.875rem',
      lineHeight: 1.75,
      color: '#000000',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.35,
      color: '#000000',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75,
      color: '#000000',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      color: '#000000',
    },
    overline: {
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: 2,
      textTransform: 'uppercase',
      color: '#000000',
    },
  };
};
