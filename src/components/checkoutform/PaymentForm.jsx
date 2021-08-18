import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";

const PaymentForm = () => {
  const methods = useForm();
  return (
    <>
      <Typography variant="body1" gutterBottom>
        Payment Form
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={null}>
          <Grid container space={4}></Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default PaymentForm;
