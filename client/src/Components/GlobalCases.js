import React, { Fragment, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";

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
  return (
    <Fragment>
      <Typography style={{ fontWeight: "bold" }} variant="h5">
        Active Cases
      </Typography>
      <Typography style={{ color: "red" }} variant="h4">
        {cases}
      </Typography>
    </Fragment>
  );
};

export default Globalcases;
