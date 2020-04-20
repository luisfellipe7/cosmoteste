import React from "react";
import UserProfile from "../Hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  padding: 35px;
`;

const BackButton = styled.div`
  padding: 25px;
`;

const User = (props) => {
  let { handle } = useParams();
  const url = `https://api.github.com/users/${handle}`;
  console.log(handle, "handle --");
  const info = UserProfile(handle, url);
  console.log(info, "info --");

  const classes = useStyles();
  return (
    <UserInfo>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Avatar alt="Remy Sharp" src={info.avatar_url} />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {info.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {info.email}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {info.bio}
          </Typography>
          <Typography variant="body2" component="p">
            Followers: {info.followers}
            <br />
            Following: {info.following}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/repo/${handle}`}>
            <Button size="small">Repositories</Button>
          </Link>
        </CardActions>
      </Card>
      <BackButton>
        <Link to={`/users/${handle}`}>
          <Button variant="outlined" color="secondary" width>
            Back
          </Button>
        </Link>
      </BackButton>
    </UserInfo>
  );
};

export default User;
