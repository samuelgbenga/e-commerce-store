import React from "react";
import { ListItem, Typography, List, ListItemText } from "@material-ui/core";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <Typography gutterBottom variant="h6" align="center">
        Summery Of Purchase
      </Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={product.price.formatted_with_symbol}
            />
            <div>
              <Typography variant="body2">
                {product.line_total.formatted_with_symbol}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "grey" }}>
                Quatity:{product.quantity}
              </Typography>
            </div>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Subtotal:" />
          <Typography variant="h5">
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
