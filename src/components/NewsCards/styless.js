import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0.5",
    width: "100%",
    margin: 0,
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
    border: "5px solid white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});
