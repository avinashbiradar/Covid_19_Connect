import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "../needHelpRequest/needHelpRequest.css";
import Services from "../../Services/productServices";
const services = new Services();
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 900,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(2),
    color: "red",
  },
}));

export default function NeedHelpRequest() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [books, setBooks] = React.useState([]);
  const [data, setData] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const getAllCityData = () => {
    console.log("get all data ");
    services
      .getRequestsForCity()
      .then((data) => {
        console.log("in the get all cities ", data);
        setBooks(data.states.districts);
        setData(data.states.districts);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="container" component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
      <div className="header">
        <Typography component="h1" variant="h4" color="secondary">
          Need help request
        </Typography>
        </div>
        <div className={classes.root}>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </div>
        -----------------------------OR---------------------------
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Patient’s Name"
                name="Patient’s Name"
                variant="outlined"
                required
                fullWidth
                id="Patient’s Name"
                label="Patient’s Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Age"
                label="Age"
                name="Age"
                autoComplete="Age"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Contact Name"
                name="Contact Name "
                variant="outlined"
                required
                fullWidth
                id="Contact Name"
                label="Contact Name "
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                label="Contact no."
                name="Contact no."
                autoComplete="Contact no."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Description"
                label="Description"
                id="Description"
                multiline
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-select-currency-native"
                select
                fullWidth
                label="City"
                // value={currency}
                onChange={handleChange}
                // onClick={getAllCityData}
                SelectProps={{
                  native: true,
                }}
              
                variant="outlined"
              >
                <option>{books}</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-select-currency-native"
                select
                fullWidth
                label="State"
                // value={currency}
                onChange={handleChange}
              
                SelectProps={{
                  native: true,
                }}
               
                variant="outlined"
              >
                <option></option>
              </TextField>
            </Grid>
            <br />
            <Typography variant="h6">Requirements</Typography>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label=" Remdesivir"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Ventilator"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Fabiflu"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Plasma"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="ICU Beds"
              />

              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Bed"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Oxygen Cylinder"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Tocilizumab"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Favipiravir"
              />

              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Food"
              />

              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Others"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
