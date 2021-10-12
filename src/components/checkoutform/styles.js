import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {},
  formProvider: {
    textAlign: "center",
    paddingBottom: "30px",
  },
  selectInput: {
    color: "red",
  },
  addressButtons: {
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "100%",
  },
  addressButton: {
    width: "100%",
    height: "auto",
  },
  paymentButtons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentButton: {
    margin: 7,
    width: "100%",
  },
}));
