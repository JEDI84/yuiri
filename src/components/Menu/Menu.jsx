import { IconButton, MenuItem, Popover } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Menu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton color="yellow" aria-label="menu" onClick={handleClick}>
        <img
          src="/burguer.svg"
          alt="Custom Icon"
          width="55"
          height="55"
          border=""
        />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#AC8B40",
              padding: "20px",
              fontSize: "25px",
            }}
          >
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#AC8B40",
              padding: "20px",
              fontSize: "25px",
            }}
          >
            About
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#AC8B40",
              padding: "20px",
              fontSize: "25px",
            }}
          >
            Contact
          </Link>
        </MenuItem>
      </Popover>
    </>
  );
};

export default Menu
