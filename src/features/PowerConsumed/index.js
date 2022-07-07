import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Card, CardMedia } from "@material-ui/core";
import {
  KeyboardArrowDown,
  ChevronRight,
  EventNoteTwoTone,
} from "@material-ui/icons";
import pic from "../../assets/images/graph.JPG";

const useStyles = makeStyles((theme) => ({
  img: {
    height: "100%",
    width: "100%",
  },
  card: {
    borderRadius: 20,
  },
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

const PowerConsumed = () => {
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
            <Typography>Power Consumed</Typography>
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
                  justifyContent="center"
                  className={classes.chevron}
                >
                  <Grid item>
                    <EventNoteTwoTone
                      style={{ color: "#7B40F2", padding: "0 0.5rem" }}
                    />
                  </Grid>
                  <Grid item style={{ paddingRight: "0.5rem" }}>
                    Month
                  </Grid>
                  <Grid item style={{ paddingRight: "0.5rem" }}>
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
        <Card className={classes.card}>
          <CardMedia>
            <img src={pic} alt="Graph" className={classes.img} />
          </CardMedia>
        </Card>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default PowerConsumed;
