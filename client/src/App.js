import React, { Fragment } from "react";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import Globalcases from "./Components/GlobalCases";
import GlobalDeaths from "./Components/GlobalDeaths";
import { Grid, Paper } from "@material-ui/core";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Globalcases />
          </div>
          <div id='canvas' className="col-md-8 my-1">
            <Map />
          </div>
          <div className='col-md-2'>
            <GlobalDeaths />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
