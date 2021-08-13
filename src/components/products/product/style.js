import { makeStyles } from "@material-ui/core";
export default makeStyles(() => ({
  productsRoot: {
    margin: "20px",
  },
  root: {
    background: "#ccc",
  },
  media: {
    height: 0,
    paddingTop: "75%",
  },
  cardactions: {
    margin: 0,
    padding: 0,
    display: "flex",
  },
  contentsDiv: {
    background: "#EEFFF1",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 10px",
  },
  content: {
    textAlign: "left",
  },
}));
