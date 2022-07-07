// import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Container } from "@material-ui/core";
import MainBanner from "../features/MainBanner";
import Devices from "../features/Devices";
import Members from "../features/Members";
import MainContent from "../features/MainContent";
import PowerConsumed from "../features/PowerConsumed";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  secondContainer: {
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    padding: "5rem",
  },
  innerItem: {
    padding: "5rem",
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <br />
        <br />
        <Grid item>
          <Grid item container direction="row" spacing={4}>
            <Grid item md={7}>
              <Grid item container direction="column">
                <Grid item>
                  <MainBanner />
                </Grid>
                <br />
                <Grid item>
                  <MainContent />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5} className={classes.secondContainer}>
              <Grid
                item
                container
                direction="column"
                classname={classes.innerItem}
              >
                <Grid item>
                  <Devices />
                </Grid>
                <br />
                <Grid item>
                  <Members />
                </Grid>
                <br />
                <Grid item>
                  <PowerConsumed />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};

export default HomeScreen;
