import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  CardActions,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyle from "./style";

const Product = ({ product, handleAddToCart }) => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardMedia
        image={product.media.source}
        className={classes.media}
        title={product.name}
      />
      <div className={classes.contentsDiv}>
        <CardContent className={classes.content}>
          <div>
            <Typography variant="h6">{product.name}</Typography>
            <Typography
              variant="subtitle1"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <Typography variant="subtitle2">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardactions}>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => handleAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default Product;
