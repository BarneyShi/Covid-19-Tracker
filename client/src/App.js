import React, { Fragment, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import Globalcases from "./Components/GlobalCases";
import GlobalDeaths from "./Components/GlobalDeaths";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Globalcases />
          </div>
          <div id='canvas' className="col-md-8">
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
