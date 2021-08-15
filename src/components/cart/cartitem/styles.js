import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: { display: "flex", background: "white", padding: 5 },
  media: {
    width: 0,
    paddingLeft: "25%",
    border: "solid 1px black",
    height: 100,
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
  },
  mediaContainer: {
    width: "100%",
  },
}));
