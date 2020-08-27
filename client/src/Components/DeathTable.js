import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

const DeathTable = () => {
  const [cases, setCase] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      const nums = await axios.get("https://disease.sh/v3/covid-19/countries");
      nums.data.sort((a, b) => {
        return b.deaths - a.deaths;
      });
      setCase(nums.data);
    };
    fetch();
  }, []);
  //custome table styles
  const useStyles = makeStyles({
    root: {
      height: "720px",
    },
    tabelcell: {
      fontWeight: 500,
    },
  });
  const classes = useStyles();
  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country/Region</TableCell>
            <TableCell align="right">Death Cases</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases !== 0 &&
            cases.map((row) => (
              <TableRow key={row.country}>
                <TableCell className={classes.tabelcell} component="th" scope="row">
                  {row.country}
                </TableCell>
                <TableCell className={classes.tabelcell} align="right">
                  {row.deaths.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DeathTable;
