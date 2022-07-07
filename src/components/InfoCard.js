// import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Card, Typography, Switch } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "1rem",
    borderRadius: 20,
  },
}));

const InfoCard = ({ info, middle }) => {
  const { status, icon, bg, title, light, backgroundColor } = info;
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Card
        className={classes.card}
        style={{
          backgroundColor:
            bg === true
              ? "#7B40F2"
              : backgroundColor
              ? backgroundColor
              : undefined,
          boxShadow:
            bg === true
              ? "-2px 11px 12px -1px rgba(106,13,173,0.2)"
              : undefined,
          color:
            bg === true || backgroundColor
              ? "white"
              : light === true
              ? "#7B40F2"
              : undefined,
        }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              {middle && <Typography>{status}</Typography>}
              {!middle && <Typography>{icon}</Typography>}
            </Grid>
            <Grid item>
              <Grid item container direction="row" alignItems="center">
                <Grid item>{!middle && <Typography>{status}</Typography>}</Grid>
                <Grid item>
                  <Switch
                    color={backgroundColor ? backgroundColor : "#7B40F2"}
                    checked={status === "ON" ? true : false}
                    name="checkedA"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {middle && <Grid item>{icon}</Grid>}
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
      </Card>
    </Grid>
  );
};

export default InfoCard;
