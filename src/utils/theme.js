import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  typography: {
    fontFamily: "Poppins,sans-serif",
  },
  palette: {
    primary: {
      main: "#2AA7FF",
    },
    secondary: {
      main: "#1B3C74",
    },
    success: {
      main: "#00A500",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "90%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#000000",
          fontSize: "56px",
          fontWeight: "700",
        },
        h2: {
          color: "#1B3C74",
          fontWeight: "600",
          fontSize: "48px",
          lineHeight: 1.2,
        },
        h3: {
          color: "#102851",
          fontSize: "30px",
          fontWeight: "500",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
  },
});

appTheme.typography.h2 = {
  [appTheme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};

appTheme.typography.h1 = {
  [appTheme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
};

appTheme.typography.h3 = {
  [appTheme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};
