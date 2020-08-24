import React, { Component } from "react";
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
 const Navbar = () => {
    const classes = useStyles();

    return (
      <div>
        <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Covid-19 Tracker
    </Typography>
    <Button color="inherit">Login</Button>
    <Button color="inherit">Register</Button>
  </Toolbar>
</AppBar>
      </div>
    );
}

export default Navbar;
