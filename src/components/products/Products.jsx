import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyle from "./product/style";

const products = [
  {
    id: 1,
    name: "bags",
    description: "good bag",
    price: 2.5,
    image:
      "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: 2,
    name: "cloth",
    description: "good cloth",
    price: 2.5,
    image:
      "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: 3,
    name: "earings",
    description: "good earings",
    price: 2.5,
    image:
      "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: 4,
    name: "wrist watch",
    description: "good watch",
    price: 2.5,
    image:
      "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: 5,
    name: "hand bag",
    description: "good hand bag",
    price: 2.5,
    image:
      "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];
const Products = () => {
  const classes = useStyle();
  return (
    <main className={classes.productsRoot}>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((elem) => (
          <Grid
            style={{ "text-align": "center" }}
            item
            key={elem.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Product product={elem} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
