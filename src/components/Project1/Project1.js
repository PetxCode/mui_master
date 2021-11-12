import React from "react";
import {
  Button,
  Typography,
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  Box,
} from "@mui/material";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import AdbIcon from "@mui/icons-material/Adb";
import AppsIcon from "@mui/icons-material/Apps";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import { myTheme } from "./theme";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    borderRadius: "3px",
    transition: "all 350ms",
    margin: "0 5px",

    "&:hover": {
      cursor: "pointer",
      // backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
  },
  textColor: {
    color: "#ffff",
    fontWeight: "bold",
  },
  navCTR: {
    display: "flex",
  },
  tool: {
    display: "flex",
  },
  space: {
    flex: 1,
  },
  navLink: {
    textDecoration: "none",
    transition: "all 350ms",
    borderRadius: "3px",

    "&.active": {
      backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
  },

  myBreak: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Project1 = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.tool}>
          <div className={classes.navCTR}>
            <NavLink to="/body1" className={classes.navLink}>
              <Box className={classes.box}>
                <HomeIcon className={classes.textColor} />
                <Typography variant="body2" className={classes.textColor}>
                  HOME
                </Typography>
              </Box>
            </NavLink>
            <NavLink to="/body2" className={classes.navLink}>
              <Box className={classes.box}>
                <AdbIcon className={classes.textColor} />
                <Typography variant="body2" className={classes.textColor}>
                  Bug
                </Typography>
              </Box>
            </NavLink>
            <NavLink to="/body3" className={classes.navLink}>
              <Box className={classes.box}>
                <AppsIcon className={classes.textColor} />
                <Typography variant="body2" className={classes.textColor}>
                  More
                </Typography>
              </Box>
            </NavLink>
          </div>
          <div className={classes.space} />
          <div></div>
          <Avatar className={classes.myBreak} />
        </Toolbar>
        <div></div>
      </AppBar>
      <br />
      <br />

      <br />
    </div>
  );
};

export default Project1;
