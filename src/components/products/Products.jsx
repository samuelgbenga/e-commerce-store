import React from "react";
import { Grid, createTheme, ThemeProvider } from "@material-ui/core";
import { green, blue } from "@material-ui/core/colors";
import Product from "./product/Product";
import useStyle from "./product/style";

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

const Products = ({ products, handleAddToCart }) => {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <main className={classes.productsRoot}>
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid
              style={{ textAlign: "center" }}
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Product product={product} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </ThemeProvider>
  );
};

export default Products;
