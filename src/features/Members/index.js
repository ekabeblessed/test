import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Card } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import MembersCard from "../../components/MembersCard";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "1rem",
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

const members = [
  {
    pic: require("../../assets/images/logo-figma.png"),
    name: "Scarllet",
    role: "Admin",
  },

  {
    pic: require("../../assets/images/logo-xcode.png"),
    name: "Nariya",
    role: "Admin",
  },
  {
    pic: require("../../assets/images/logo-invision.png"),
    name: "Riya",
    role: "Admin",
  },
  {
    pic: require("../../assets/images/logo-swift.png"),
    name: "Dad",
    role: "Admin",
  },
  {
    pic: require("../../assets/images/logo-react.orig.png"),
    name: "Mom",
    role: "Admin",
  },
];

const Members = () => {
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
            <Typography>Members</Typography>
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
          <Grid
            item
            container
            direction="row"
            spacing={4}
            justifyContent="center"
          >
            {members.map((member) => (
              <Grid item md={2}>
                <MembersCard member={member} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Members;
