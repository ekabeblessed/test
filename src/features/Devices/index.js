import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import {
  KeyboardArrowDown,
  ChevronRight,
  Router,
  Kitchen,
  Album,
} from "@material-ui/icons";
import InfoCard from "../../components/InfoCard";

const useStyles = makeStyles((theme) => ({
  chevron: {
    backgroundColor: "#EDEEF3",
    borderRadius: 5,
    padding: "0 0.2rem",
  },
  lastChevron: {
    backgroundColor: "#EDEEF3",
    // borderRadius: 5,
    margin: "0 0.2rem",
  },
}));

const infos = [
  {
    status: "ON",
    icon: <Kitchen />,
    title: "Refrigerator",
    switch: "ON",
    backgroundColor: "#7B40F2",
  },
  {
    status: "ON",
    icon: <Router />,
    title: "Router",
    switch: "ON",
    backgroundColor: "#F5C527",
  },
  {
    status: "ON",
    icon: <Album />,
    title: "Music System",
    switch: "ON",
    backgroundColor: "#FB9160",
  },
  {
    status: "ON",
    icon: <Album />,
    title: "Lamps",
    switch: "ON",
    backgroundColor: "#3ACBEA",
  },
];

const Devices = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography>My Devices</Typography>
          </Grid>
          <Grid item>
            <Grid
              item
              container
              direction="row"
              spacing={3}
              alignItems="center"
            >
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.chevron}
                >
                  <Grid item>ON</Grid>
                  <Grid item>
                    <KeyboardArrowDown />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.chevron}
                >
                  <Grid item>
                    <ChevronRight />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid item>
        <Grid item container direction="row" spacing={3}>
          {infos.map((info) => (
            <Grid item md={6}>
              <InfoCard info={info} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Devices;
