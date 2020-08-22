import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: 800,
      height: 800,
      latitude: 49.2827,
      longitude: -123.1207,
      zoom: 2,
    },
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken="pk.eyJ1IjoiaWR1bm5vY29kaW5nOTUiLCJhIjoiY2tlMTFiMDh4NDF4cTJ5bWgxbDUxb2M5ciJ9.-L_x_0HZGSXFMRdactrn-Q"
      >
        <Marker latitude={49.2827} longitude={-123.1207}>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "red",
              borderRadius: "50%",
              opacity: "60%",
            }}
          ></div>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;
