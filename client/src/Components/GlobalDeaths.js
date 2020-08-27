import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Typography, makeStyles } from "@material-ui/core";
import DeathTable from "./DeathTable";

const GlobalDeaths = () => {
  //API call
  const [deaths, setDeaths] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      const num = await axios.get("https://disease.sh/v3/covid-19/all");
      setDeaths(num.data.deaths.toLocaleString());
    };
    fetch();
  }, []);
  //custom MUI style
  const useStyles = makeStyles({
    h5: {
      fontWeight: "bold",
    },
    h4: {
      color: "red",
    },
  });
  const classes = useStyles();
  //==================
  return (
    <Fragment>
      <Typography className={classes.h5} variant="h5">
        Global Deaths
      </Typography>
      <Typography className={classes.h4} variant="h4">{deaths}</Typography>
      <DeathTable />
    </Fragment>
  );
};

export default GlobalDeaths;
