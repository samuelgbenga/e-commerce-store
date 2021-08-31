import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import useStyle from "./styles";
import Review from "./Review";

const PaymentForm = ({
  prevStep,
  shippingData,
  checkoutToken,
  capture,
  nextStep,
}) => {
  const classes = useStyle();
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLIC_TEST_KEY
  );

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const getCardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: getCardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          Name: {
            first_name: shippingData.firstName,
            last_name: shippingData.lastName,
          },
          email: shippingData.email,
        },
        shipping: {
          name: "primary",
          city: shippingData.city,
          shipping_state: shippingData.shippingSubdivision,
          shipping_country: shippingData.shippingCountry,
          zip_code: shippingData.zip,
        },
        fulfillment: { shippingMethod: checkoutToken.shipping_methods },
        payment: {
          gateway: "stripe",
          stripe: { paymentMethod_id: checkoutToken.gateways[0].id },
        },
      };
      capture(checkoutToken.id, orderData);
      nextStep();
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography align="center" variant="h6">
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <br />
              <CardElement elements={elements} stripe={stripe} />
              <br />
              <div className={classes.paymentButtons}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.paymentButton}
                >
                  Make Payment
                </Button>
                <Button
                  onClick={prevStep}
                  variant="text"
                  className={classes.paymentButton}
                >
                  go back
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
