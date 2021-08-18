import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Step,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import useStyle from "./styles";
import { commerce } from "../../../lib/commerce";
import { green, blue } from "@material-ui/core/colors";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

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

const steps = ["Shipping Address", "Payment Details"];
const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const classes = useStyle();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (e) {
        console.log("generate token error:", e);
      }
    };
    generateToken();
  }, [cart]);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );

  const Confirmation = () => <div>completed!</div>;
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <main className={classes.main}>
          <Paper className={classes.papper}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <Form />
            )}
          </Paper>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Checkout;
