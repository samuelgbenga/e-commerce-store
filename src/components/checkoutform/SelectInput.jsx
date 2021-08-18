import { Grid } from "@material-ui/core";
import React from "react";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

const SelectInput = ({ value, handleOnChange, label, countries }) => {
  return (
    <Grid item xs={12} sm={6}>
      <InputLabel align="left">{label}</InputLabel>
      <Select
        align="left"
        fullWidth
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      >
        {countries.map((country) => (
          <MenuItem key={country.id} value={country.id}>
            {country.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export default SelectInput;
