import React from "react";
import img from "./3.gif";
import vid from "./Course.mp4";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";

const useStyles = makeStyles({
  text: {
    color: "#000",
    fontWeight: "bold",
  },
  img: {
    width: "90%",
    height: "300px;",
    objectFit: "contain",
  },
  gridSpace: {
    margin: "0 10px",
  },
  buttonSpace: {
    justifyContent: "space-between",
    display: "flex",
  },
  maxCard: {
    maxWidth: "345px",
  },

  card: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  cardWrap: {
    width: "300px",
    margin: "10px",
  },

  centerData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Body2 = () => {
  const classes = useStyles();

  const { data, isLoading, isError } = useQuery("data", () => {
    var options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coinsy",
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "02dc23aea7msh5cc3022c747fdd7p160805jsn1378c2b79155",
      },
    };

    const res = axios.request(options);
    return res;
  });

  console.log("Getting Data: ", data?.data.data.coins);
  return (
    <div>
      <div>This is Body One</div>
      <div>
        {isLoading && (
          <div className={classes.centerData}>
            <CircularProgress />
            {/* <Skeleton variant="rectangular" width={510} height={718} /> */}
          </div>
        )}
        {isError && (
          <div className={classes.centerData}>
            Network can't be reached {isError}
          </div>
        )}
        {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
        <div className={classes.card}>
          {data?.data.data.coins.map((props) => (
            <Card className={classes.cardWrap} key={props.id}>
              <CardMedia
                component="img"
                alt="Just an Image"
                image={props.iconUrl}
                className={classes.img}
              />
              <CardContent>
                <Typography variant="h5" className={classes.text}>
                  {props.name}
                </Typography>
                <Typography className={classes.text}>
                  Top Ranking Position: {props.rank}
                </Typography>
                <Typography className={classes.text} variant="h8">
                  Cost per Coin: ${props.volume}
                </Typography>
                <Typography className={classes.text}>
                  Market Value: {props.marketCap}
                </Typography>
              </CardContent>
              <CardActions className={classes.buttonSpace}>
                <Button variant="contained" color="secondary">
                  Let's do this
                </Button>
                <Button variant="outlined" color="primary">
                  Let's do this Again
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body2;
