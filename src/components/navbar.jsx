import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" variant="title">
            Pixabay Image Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
