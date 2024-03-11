import React from "react";
import classes from "./Header.module.css";
import { ThemeProvider } from "@mui/material";
import Typography from '@mui/material/Typography';
import theme from '../../Fonts/Font'

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <header className={classes.header}>
      <Typography className={classes.title} variant="h1">Todos</Typography>
    </header>
    </ThemeProvider>
    
  );
}
