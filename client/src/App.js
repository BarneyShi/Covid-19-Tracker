import React, { Fragment } from "react";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import Globalcases from "./Components/GlobalCases";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container" style={{ maxWidth: "max-content" }}>
        <div className="row">
          <div className="col-md-2">
            <Globalcases />
          </div>
          <div className="col-md-8">
            <Map />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
