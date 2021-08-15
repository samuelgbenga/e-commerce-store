import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyle from "./styles";

const CartItem = ({ product, remove, update }) => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardMedia
        image={product.media.source}
        alt={product.name}
        className={classes.media}
      />
      <div className={classes.mediaContainer}>
        <CardContent className={classes.content}>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="subtitle1">
            {product.price.formatted_with_symbol}
          </Typography>
        </CardContent>
      </div>
      <CardActions className={classes.actions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => update(product.id, product.quantity - 1)}
          >
            -
          </Button>
          <Typography>{product.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => update(product.id, product.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="text"
          type="button"
          size="medium"
          color="secondary"
          onClick={() => remove(product.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
