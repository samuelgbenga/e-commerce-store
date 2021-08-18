import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import { Button, Typography, Grid } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import useStyle from "./styles";
import SelectInput from "./SelectInput";

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const classes = useStyle();
  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  const options = shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description}-(${option.price.formatted_with_symbol})`,
  }));

  useEffect(() => {
    if (checkoutToken === null) return;
    fetchShippingCountries(checkoutToken?.id);
  }, [checkoutToken]);

  useEffect(() => {
    shippingCountry !== "" && fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    shippingSubdivision !== "" &&
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [checkoutToken.id, shippingCountry, shippingSubdivision]);

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, region) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  return (
    <div className={classes.formProvider}>
      <Typography variant="h6" gutterBottom align="center">
        Address Form
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={null}>
          <Grid container spacing={3}>
            <FormInput
              label="First name"
              name="first name"
              placeholder="ex: Samuel"
            />
            <FormInput
              label="Last name"
              name="last name"
              placeholder="ex: Joseph"
            />
            <FormInput
              label="Address"
              name="address1"
              placeholder="ex: No 11 Peterson Str"
            />
            <FormInput
              label="Email"
              name="email"
              placeholder="ex: samuel@gmail"
            />
            <FormInput
              label="City"
              name="city"
              placeholder="ex: Lagos Island"
            />
            <FormInput label="ZIP Code" name="zip" placeholder="ex: 110001" />
            <SelectInput
              value={shippingCountry}
              handleOnChange={(value) => setShippingCountry(value)}
              optionList={countries}
              // name={testing}
              label="Shipping Country"
              className={classes.selectInput}
            />
            <SelectInput
              value={shippingSubdivision}
              handleOnChange={(value) => setShippingSubdivision(value)}
              optionList={subdivisions}
              label="Shipping Subdivision"
              className={classes.selectInput}
            />
            <SelectInput
              value={shippingOption}
              handleOnChange={(value) => setShippingOption(value)}
              optionList={options}
              label="Shipping Options"
              className={classes.selectInput}
            />
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
