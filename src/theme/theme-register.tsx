'use client';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { PaletteMode } from '@mui/material';
import { createTheme } from './index';

type ThemeRegisterProps = {
  children: React.ReactNode;
};

const ThemeRegister: React.FC<ThemeRegisterProps> = ({ children }) => {
  //   const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme();

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default ThemeRegister;
