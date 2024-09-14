import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Nunito", sans-serif',
  },
  palette: {
    warning: {
      main: "#F9A825",
    },
    grey: {
      A6f: "#6f6f76",
      A6fToggle: "#6f6f76",
    },
    primary: {
      main: "#f5f5fc",
    },
    success: {
      main: "#558B2F",
    },
  },
  breakpoints: {
    values: {
      xs: 460,
      sm: 650,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#f5f5fc",
        },
        common: {
          white: "#FFFFFF",
          black: "#2C2C2C",
        },
      },
    },
    dark: {
      palette: {
        mode: "light",
        primary: {
          main: "#212121",
        },
        common: {
          white: "#2C2C2C",
          black: "#FFFFFF",
        },
        grey: {
          A6f: "#6f6f76",
          A6fToggle: "#FFFFFF",
        },
      },
    },
  },
});

export default theme;
