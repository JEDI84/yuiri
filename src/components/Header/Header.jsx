import React from 'react'
import "./Header.css"
import Menu from "../Menu/Menu"
import { Toolbar } from '@mui/material'
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   FormControlLabel,
//   Button,
//   Menu,
// } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="head">
        <Toolbar position="sticky">
          <Menu />
        </Toolbar>
      </div>
    </>
  );
}

export default Header

