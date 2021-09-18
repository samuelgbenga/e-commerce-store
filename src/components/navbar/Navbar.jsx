import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  ThemeProvider,
  createTheme,
  Typography,
} from "@material-ui/core";
// import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.PNG";
import useStyle from "./styles";
import { green, blue } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[200],
    },
  },
});
const Navbar = ({ quantity }) => {
  const classes = useStyle();
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography component={Link} to="/e-commerce-store/">
            <img src={logo} alt="logo" className={classes.img} />
          </Typography>
          <div className={classes.cartGrow} />
          {location.pathname === "/e-commerce-store/" && (
            <IconButton aria-label="cart" component={Link} to="/cart">
              <Badge badgeContent={quantity} color="primary">
                {/* <ShoppingCart /> */}
                🛒
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.pushDown}></div>
    </ThemeProvider>
  );
};

export default Navbar;
