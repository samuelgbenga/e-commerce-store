import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyle from "./product/style";

const Products = ({ products, handleAddToCart }) => {
  const classes = useStyle();
  return (
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
  );
};

export default Products;
