"use client";
import {
  ThemeProvider as MuiProvider,
  createTheme,
} from "@mui/material/styles";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = createTheme({
    cssVariables: true,
    colorSchemes: {
      dark: true,
    },
  });

  return <MuiProvider theme={theme}>{children}</MuiProvider>;
};

export default ThemeProvider;
