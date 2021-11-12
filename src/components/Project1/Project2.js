import React from "react";
import { Avatar, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  break: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Project2 = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton>Logo</IconButton>
          <Nav to="/">
            <Typography>Home</Typography>
          </Nav>
          <Avatar className={classes.break} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Project2;

const Nav = styled(NavLink)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  transition: all 350ms;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  margin: 0 5px;

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
