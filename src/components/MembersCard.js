import { Grid, Typography } from "@material-ui/core";

const MembersCard = ({ member }) => {
  const { pic, name, role } = member;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <img
          src={pic}
          alt={name}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            overflow: "hidden",
          }}
        />
      </Grid>
      <Grid item>
        <Typography align="center" style={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography align="center">{role}</Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default MembersCard;
