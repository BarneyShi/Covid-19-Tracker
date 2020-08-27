import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import '../stylesheets/mapbox.css'

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const styles = (theme) => ({
  text: {
    padding: 0,
  },
  root: {
    minWidth: 0,
  },
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 800,
        height: 800,
        latitude: 25.355,
        longitude: 20,
        zoom: 1.5,
      },
      data: null,
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    this.setState({ data: response.data });
  }

  render() {
    const scaleCirle = (cases) => {
      if (cases < 1000) {
        return {
          width: "10px",
          height: "10px",
          backgroundColor: "yellow",
          borderRadius: "50%",
          opacity: "60%",
          border: "0.5px solid black",
        };
      } else if (cases < 5000) {
        return {
          width: "20px",
          height: "20px",
          backgroundColor: "orange",
          borderRadius: "50%",
          opacity: "60%",
          border: "0.5px solid black",
        };
      } else if (cases < 10000) {
        return {
          width: "30px",
          height: "30px",
          backgroundColor: "#ff0000b0",
          borderRadius: "50%",
          opacity: "60%",
          border: "0.5px solid black",
        };
      } else if (cases < 500000) {
        return {
          width: "45px",
          height: "45px",
          backgroundColor: "red",
          borderRadius: "50%",
          opacity: "60%",
          border: "0.5px solid black",
        };
      } else {
        return {
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          borderRadius: "50%",
          opacity: "60%",
          border: "0.5px solid black",
        };
      }
    };
    const onHover = (e) => {
      console.log(e.country);
    };
    const { classes } = this.props;
    return (
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({ viewport })}
            mapboxApiAccessToken="pk.eyJ1IjoiaWR1bm5vY29kaW5nOTUiLCJhIjoiY2tlMTFiMDh4NDF4cTJ5bWgxbDUxb2M5ciJ9.-L_x_0HZGSXFMRdactrn-Q"
          >
            {this.state.data
              ? this.state.data.map((e, i) => {
                  return (
                    <Marker
                      latitude={e.countryInfo.lat}
                      longitude={e.countryInfo.long}
                      key={i}
                    >
                      <HtmlTooltip
                        title={
                          <React.Fragment>
                            {/* <Typography color="inherit">
                        Tooltip with HTML
                      </Typography> */}
                            <img alt={e.country}
                              style={{ width: "25px" }}
                              src={e.countryInfo.flag}
                            />
                          </React.Fragment>
                        }
                      >
                        <Button className={`${classes.text} ${classes.root}`}>
                          {" "}
                          <div
                            onMouseOver={() => onHover(e)}
                            style={scaleCirle(e.active)}
                          ></div>
                        </Button>
                      </HtmlTooltip>
                    </Marker>
                  );
                })
              : null}
          </ReactMapGL>
    );
  }
}

export default withStyles(styles)(Map);
