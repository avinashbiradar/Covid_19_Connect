import React from "react";
import "../MainContent/maincontent.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../MainContent/maincontent.css";
import Services from "../../Services/productServices";
const services = new Services();
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MainContent() {
  const classes = useStyles();
  const [books, setBooks] = React.useState([]);
  const [data, setData] = React.useState(0);

  React.useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    console.log("get all data ");
    services
      .getRequestsForMedicine()
      .then((data) => {
        console.log("in the get all books ", data);
        setBooks(data.data);
        setData(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main">
      <div classname="filter">
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
      {books.map((data) => (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {data.cardType}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              City:{data.city}
            </Typography>
            <Typography variant="h5" component="h2">
              {data.contactName}
            </Typography>
            <Typography color="textSecondary">
              PatientContact:+91{data.contactNumber}
            </Typography>
            <Typography variant="body2" component="p">
              PatientAge:{data.patientAge}
            </Typography>
            <Typography variant="body2" component="p">
              PatientName:{data.patientName}
            </Typography>
            <Typography variant="body2" component="p">
              Requirement:{data.requirement}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
