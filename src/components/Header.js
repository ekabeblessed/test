import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import {
  SettingsTwoTone,
  NotificationsTwoTone,
  KeyboardArrowDown,
  Search,
} from "@material-ui/icons";
import pic from "../assets/images/avatar-default.jpg";

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: "2rem",
    border: "none",
    height: "1rem",
    width: "300px",
    padding: "1rem",
    outlineWidth: "0",
    fontSize: "1rem",
    color: "",
    backgroundColor: "transparent",
  },
  searchIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  search: {
    display: "flex",
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    maxWidth: "fit-content",
    padding: "1rem",
    height: "1.1rem",
    border: "1px solid black",
    borderRadius: 20,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item>
        <div className={classes.search}>
          <input type="text" className={classes.input} placeholder="Search " />
          <Search className={classes.searchIcon} />
        </div>
      </Grid>
      <Grid item>
        <Grid item container direction="row" alignItems="center" spacing={3}>
          <Grid item>
            <SettingsTwoTone />
          </Grid>
          <Grid item>
            <NotificationsTwoTone />
          </Grid>
          <Grid item>
            <Grid item container direction="row" alignItems="center">
              <Grid item>
                <img
                  src={pic}
                  alt="profile "
                  style={{ height: 40, width: 40, borderRadius: 20 }}
                />
              </Grid>
              <Grid item style={{ padding: "0 0.4rem" }}>
                <Typography>Scarllet</Typography>
              </Grid>
              <Grid item>
                <KeyboardArrowDown />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
