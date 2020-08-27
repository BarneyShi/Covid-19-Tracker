import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import "../stylesheets/mapbox.css";
import { Typography, Grid } from "@material-ui/core";

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
  body1: {
    // borderBottom: "1px solid grey",
    paddingBottom: "3px",
    fontWeight: 500,
    padding: 0,
  },
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 800,
        height: 780,
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
                        <Grid container justify="center">
                          <img
                            alt={e.country}
                            style={{ width: "35px", display: "block" }}
                            src={e.countryInfo.flag}
                          />
                        </Grid>

                        <Grid container justify="space-between">
                          <Typography variant="body2" display="inline">
                            Country: &nbsp;{" "}
                          </Typography>
                          <Typography
                            className={classes.body1}
                            variant="body1"
                            display="inline"
                          >
                            {e.country}
                          </Typography>
                        </Grid>

                        <hr style={{ margin: "5px 0px" }} />

                        <Grid container justify="space-between">
                          <Typography
                            variant="body2"
                            display="inline"
                            align="left"
                          >
                            Cases: &nbsp;{" "}
                          </Typography>
                          <Typography
                            className={classes.body1}
                            display="inline"
                            variant="body1"
                            align="right"
                          >
                            {e.cases}
                          </Typography>
                        </Grid>

                        <hr style={{ margin: "5px 0px" }} />

                        <Grid container justify="space-between">
                          <Typography variant="body2" display="inline">
                            Active: &nbsp;{" "}
                          </Typography>
                          <Typography
                            className={classes.body1}
                            display="inline"
                            variant="body1"
                          >
                            {e.active}
                          </Typography>
                        </Grid>

                        <hr style={{ margin: "5px 0px" }} />

                        <Grid container justify="space-between">
                          <Typography variant="body2" display="inline">
                            Deaths: &nbsp;{" "}
                          </Typography>
                          <Typography
                            className={classes.body1}
                            display="inline"
                            variant="body1"
                          >
                            {e.deaths}
                          </Typography>
                        </Grid>
                      </React.Fragment>
                    }
                  >
                    <Button className={`${classes.text} ${classes.root}`}>
                      {" "}
                      <div style={scaleCirle(e.active)}></div>
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
