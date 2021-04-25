import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import "../appbar/appbar.css"
const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  leftOptions: {
    display: "flex",
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rightOptions: {
    display: "flex",
    alignItems: "center",
    color:"Orange",
  },

  title: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  titleLogo: {
    marginRight: "10px",
  },
  titleName: {
    marginRight: "20px",
    cursor: "pointer",
    fontSize: 28,
   
  },
}));

export default function Appbar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="transparent" className={classes.AppBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.leftOptions}>
            <div className={classes.title}>
              <Typography className={classes.titleName} variant="h1" style={{color:"orange"}}>
                Covid19Connect
              </Typography>
            </div>
          </div>
          <div className={classes.rightOptions}>
            <Button className="button-resource" variant="contained" size="large" style={{background:"orange",color:"white"}} >
              Resources
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
