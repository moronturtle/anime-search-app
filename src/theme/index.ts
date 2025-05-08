import { createTheme } from "@mui/material/styles";
import { grey, blueGrey, teal, deepPurple } from "@mui/material/colors";

export type Mode = "light" | "dark";

export const getTheme = (mode: Mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: grey[100], // light grey
              paper: "#fff",
            },
            primary: {
              main: teal[600],
            },
            secondary: {
              main: deepPurple[500],
            },
          }
        : {
            background: {
              default: blueGrey[900], // dark bluish
              paper: blueGrey[800],
            },
            primary: {
              main: teal[300],
            },
            secondary: {
              main: deepPurple[200],
            },
          }),
    },
    typography: {
      fontFamily: "Poppins",
    },
  });
