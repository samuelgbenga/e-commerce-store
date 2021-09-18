import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  StepLabel,
  Typography,
  Step,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import useStyle from "./styles";
import { commerce } from "../../../lib/commerce";
import { green, blue } from "@material-ui/core/colors";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
// import congratulations from "../../../assets/congratulations.svg";
import { Link } from "react-router-dom";
import stripePayment from "../../../assets/stripe_payment.svg";
import loading from "../../../assets/loading.svg";

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
const Checkout = ({ cart, order, capture, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

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

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        prevStep={prevStep}
        nextStep={nextStep}
        capture={capture}
      />
    );

  const Confirmation = () => (
    <>
      <div style={{ textAlign: "center" }} className={classes.confirmation}>
        <div className={classes.stripePayment}>
          <img
            src={stripePayment}
            alt="congratulations"
            height="180"
            width="150"
            style={{ margin: 10 }}
          />
        </div>
        <Typography className={classes.thankYou}>Thank You !</Typography>
        {/* <Typography align="center">
          Thank you for buying with us {shippingData.shippingOption}{" "}
          {shippingData.lastName}
        </Typography> */}
        <Typography
          className={classes.subThankYou}
          align="center"
          variant="subtitle1"
          style={{ fontWeight: "bold" }}
        >
          Your Payment is Successfull
        </Typography>
        <Typography
          align="center"
          className={classes.subThankYou}
          style={{ fontSize: 12 }}
        >
          Thank you for your payment. An automated payment receipt will be sent
          to your email.
        </Typography>
        <div className={classes.back}>
          <Typography
            variant="subtitle1"
            color="secondary"
            align="center"
            component={Link}
            to="/e-commerce-store/"
            style={{ textDecoration: "none" }}
          >
            Back To Home
          </Typography>
        </div>
      </div>
    </>
  );
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <main className={classes.main}>
          <Paper className={classes.paper}>
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
            ) : checkoutToken ? (
              <Form />
            ) : (
              <div style={{ textAlign: "center" }}>
                <img src={loading} alt="Loading" />
              </div>
            )}
          </Paper>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Checkout;
