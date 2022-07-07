import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Card, Switch, CardMedia } from "@material-ui/core";
import {
  Kitchen,
  FlashOn,
  WbIncandescent,
  HotTub,
  KeyboardArrowDown,
} from "@material-ui/icons";
import InfoCard from "../../components/InfoCard";
import pic from "../../assets/images/pix.jpg";

const useStyles = makeStyles((theme) => ({
  img: {
    height: "100%",
    width: "100%",
  },
  card: {
    padding: "1rem",
    borderRadius: 20,
  },
  chevron: {
    backgroundColor: "#EDEEF3",
    borderRadius: 5,
    padding: "0 0.2rem",
  },
  item: {
    padding: "0.3rem",
    borderRadius: 25,
    backgroundColor: "rgba(106,13,173,0.2)",
  },
}));

const cardInfos = [
  {
    id: 1,
    status: "ON",
    icon: <Kitchen />,
    title: "Refrigerator",
    switch: "ON",
    light: true,
  },
  {
    id: 2,
    status: "ON",
    icon: <FlashOn />,
    title: "Temperature",
    bg: true,
    switch: "ON",
  },
  {
    id: 3,
    status: "OFF",
    icon: <HotTub />,
    title: "Air Condition",
    switch: "ON",
  },
  {
    id: 4,
    status: "OFF",

    icon: <WbIncandescent />,
    title: "Lights",
    switch: "OFF",
  },
];

const MainContent = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          item
          container
          direction="row"
          spacing={2}
          justifyContent="space-between"
        >
          <Grid item md={5}>
            <Typography variant="h5">Scarlett's Home</Typography>
          </Grid>
          <Grid item md={7}>
            <Grid
              item
              container
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Grid item md={3}>
                <Grid item container direction="row" spacing={2}>
                  <Grid item md={6}>
                    Temp
                  </Grid>
                  <Grid item md={6}>
                    25%
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid item container direction="row" spacing={2}>
                  <Grid item md={6}>
                    Temp
                  </Grid>
                  <Grid item md={6}>
                    15°C
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6}>
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  className={classes.chevron}
                >
                  <Grid item style={{ padding: "0 0.5rem" }}>
                    Living Room
                  </Grid>
                  <Grid item style={{ paddingRight: "0.5rem" }}>
                    <KeyboardArrowDown />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid item>
        <Grid item container direction="row" spacing={4}>
          {cardInfos.map((info) => (
            <Grid item md={3}>
              <InfoCard info={info} middle />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item>
        <Card className={classes.card}>
          <Grid item container direction="column">
            <Grid item>
              <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Grid item container direction="row">
                    <Grid item>
                      <FlashOn classname={classes.item} />
                    </Grid>
                    <Grid item>
                      <Typography>Living Room Temperature</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid item container direction="row" alignItems="center">
                    <Grid item>
                      <Switch
                        style={{ color: "#7B40F2" }}
                        checked={true}
                        name="checkedA"
                      />
                    </Grid>
                    <Grid item>
                      <Typography>ON</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <Grid item>
              <CardMedia>
                <img src={pic} alt="Trempeature" className={classes.img} />
              </CardMedia>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default MainContent;
