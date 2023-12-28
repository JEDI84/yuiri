import { lime, purple } from "@mui/material/colors";
import { createContext } from "react";



export const ColorModeContext = createContext({
  palette: {
    primary: lime,
    secondary: purple,
  },
});