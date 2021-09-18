import React from "react";
import CartItem from "./cartitem/CartItem";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
// import { ShoppingBasket } from "@material-ui/icons";
import samuel from "./style";
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

const Cart = ({ cart, empty, remove, update }) => {
  const classes = samuel();
  const isEmpty = cart.line_items && !cart.line_items.length;

  const EmptyCart = () => {
    return (
      <div style={{ height: "55vh" }}>
        <Typography variant="h5">No Item to see.</Typography>
      </div>
    );
  };
  const FilledCart = () => (
    <div style={{ minHeight: "55vh" }}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={4}>
          {cart.line_items.map((product) => (
            <Grid item key={product.id} xs={12} sm={12} md={12} lg={12}>
              <CartItem product={product} remove={remove} update={update} />
            </Grid>
          ))}
        </Grid>

        <div className={classes.details}>
          <Typography variant="h5" className={classes.subtotal}>
            Subtotal:{cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.empty}
              size="medium"
              type="button"
              variant="text"
              color="secondary"
              onClick={empty}
            >
              Empty
            </Button>
            <Button
              className={classes.checkout}
              size="medium"
              type="button"
              variant="contained"
              color="primary"
              component={Link}
              to="/checkout"
            >
              checkout
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );

  if (!cart.line_items) return <div className="loading">Loading...</div>;
  return (
    <Container className={classes.root}>
      <Typography className={classes.title} variant="h6">
        ITEMS YOU HAVE IN YOUR CART
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
      <div className={classes.getMore}>
        <Link to="/e-commerce-store/" className={classes.link}>
          GET MORE ITEMS!!! 🛒
        </Link>
      </div>
    </Container>
  );
};

export default Cart;
