import React, { Fragment, useState, useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import axios from "axios";
import CaseTable from "./CastTable";

const Globalcases = () => {
  const [cases, setCases] = useState(0);
  useEffect(() => {
    const temp = async () => {
      const nums = await (await axios.get("https://disease.sh/v3/covid-19/all"))
        .data.active.toLocaleString();
      setCases(nums);
    };
    temp();
  }, []);

  //custome style
  const useStyles = makeStyles({
    h5: {
      fontWeight:"bold"
    },
    h4: {
      color: "red"
    }
  })
  const classes = useStyles();
  //============================
  
  return (
    <Fragment>
      <Typography className={classes.h5} variant="h5">
        Active Cases
      </Typography>
      <Typography className={classes.h4} variant="h4">
        {cases}
      </Typography>
      <CaseTable />
    </Fragment>
  );
};

export default Globalcases;
