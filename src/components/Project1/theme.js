import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

export const myTheme = createTheme({
  palette: {
    primary: orange,
    text: {
      primary: "rgba(255, 255, 255, 0.8)",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
  shape: {
    borderRadius: "0px",
  },
  // shadow: [0],
});
