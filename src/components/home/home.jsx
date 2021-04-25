import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Footer from '../footer/footer';
import "../home/home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text:{
    flexGrow: 1,
    textAlign: "center",
    color:"orange"
  },
  paper: {  
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="box">
      <div className={classes.text}>
     <h1>Your little effort can save some lives today... </h1> 
     <h1>Let’s unite and come out of this together…</h1> 
      </div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h1 className="textone" >I need help</h1>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h1 className="textone">I want to help</h1>
              </Paper>
              <br />
              <br />
              <br />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <h3 className="text">Covid Symptoms</h3>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <h3 className="text">What to do next, if I’m are Covid +ve</h3>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <h3 className="text" >Precautions</h3>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
