import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.PNG";
import useStyle from "./styles";

const Navbar = () => {
  const classes = useStyle();
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.img} />
          <div className={classes.cartGrow} />
          <IconButton aria-label="cart" color="action">
            <Badge badgeContent={1} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.pushDown}></div>
    </>
  );
};

export default Navbar;
