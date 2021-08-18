import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ label, name, placeholder }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={() => (
          <TextField
            label={label}
            placeholder={placeholder}
            fullWidth
            required
          />
        )}
        name={name}
        control={control}
      />
    </Grid>
  );
};

export default FormInput;
