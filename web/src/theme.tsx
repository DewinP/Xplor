import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
};

const theme = extendTheme({
  colors: {
    white: "#ffffff",
    black: "#16161D",
    red: "#f05454",
    orange: "#ffa45b",
    darkish: "#2d4059",
    green: "#61b15a",
    pink: "#e05297",
    yellowish: "#fff8cd",
  },
  fonts,
  breakpoints,
});

export default theme;
