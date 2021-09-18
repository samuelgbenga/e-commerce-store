import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    maxWidth: 800,
    height: "55vh",
  },
  title: {
    textAlign: "left",
    marginBottom: "20px",
  },
  details: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    marginBottom: "20px",
  },
  getMore: {
    textAlign: "center",
    marginBottom: 60,
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "2rem",
  },
}));
