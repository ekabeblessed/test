import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import { CloudQueue, BlurOnTwoTone } from "@material-ui/icons";

import bg from "../../assets/images/background15.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem",
    overFlow: "hidden",
    borderRadius: 20,
    color: "#fff",
    boxShadow: "-2px 11px 12px -1px rgba(0,0,0,0.27)",
  },
}));

const MainBanner = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Grid item container direction="row">
          <Grid item md={7}>
            <Grid item>
              <Typography variant="h3">Hello, Scarllet</Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </Typography>
            </Grid>

            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <BlurOnTwoTone />
              </Grid>
              <Grid item>
                <Typography>
                  <span style={{ fontSize: "1.2rem" }}>+25°C</span> Outdoor
                  Temperature
                </Typography>
              </Grid>
            </Grid>
            {/* <br /> */}
            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <CloudQueue />
              </Grid>
              <Grid item>
                <Typography>Fuzzy Cloudy Weather</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5}></Grid>
        </Grid>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default MainBanner;
