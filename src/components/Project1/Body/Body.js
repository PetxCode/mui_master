import React from "react";
import img from "./3.gif";
import vid from "./Course.mp4";

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

const useStyles = makeStyles({
  text: {
    color: "#000",
  },
  img: {
    width: "100%",
    height: "300px;",
    objectFit: "cover",
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
});

const Body = () => {
  const classes = useStyles();
  return (
    <div>
      <div>This is Body One</div>
      <div>
        <Grid container spacing={2}>
          <Grid item sx={12} sm={6} lg={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Just an Image"
                image={img}
                className={classes.img}
              />
              <CardContent>
                <Typography variant="h5" className={classes.text}>
                  name
                </Typography>
                <Typography className={classes.text}>Desc</Typography>
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
          </Grid>
          <Grid item sx={12} sm={6} lg={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Just an Image"
                image={img}
                className={classes.img}
              />
              <CardContent>
                <Typography variant="h5" className={classes.text}>
                  name
                </Typography>
                <Typography className={classes.text}>Desc</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Let's do this
                </Button>
                <Button variant="outlined" color="primary">
                  Let's do this Again
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sx={12} sm={6} lg={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Just an Image"
                image={img}
                className={classes.img}
              />
              <CardContent>
                <Typography variant="h5" className={classes.text}>
                  name
                </Typography>
                <Typography className={classes.text}>Desc</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Let's do this
                </Button>
                <Button variant="outlined" color="primary">
                  Let's do this Again
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sx={12} sm={6} lg={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Just an Image"
                image={img}
                className={classes.img}
              />
              <CardContent>
                <Typography variant="h5" className={classes.text}>
                  name
                </Typography>
                <Typography className={classes.text}>Desc</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Let's do this
                </Button>
                <Button variant="outlined" color="primary">
                  Let's do this Again
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sx={12} sm={6} lg={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Just an Image"
                image={img}
                className={classes.img}
              />
              <CardContent>
                <Typography variant="h5" className={classes.text}>
                  name
                </Typography>
                <Typography className={classes.text}>Desc</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Let's do this
                </Button>
                <Button variant="outlined" color="primary">
                  Let's do this Again
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sx={12} sm={6} lg={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Just an Image"
                image={img}
                className={classes.img}
              />
              <CardContent>
                <Typography variant="h5" className={classes.text}>
                  name
                </Typography>
                <Typography className={classes.text}>Desc</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Let's do this
                </Button>
                <Button variant="outlined" color="primary">
                  Let's do this Again
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Body;
