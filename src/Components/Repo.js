import React from "react";
import { Link, useParams } from "react-router-dom";
import useRepoApi from "../Hooks/useFetch";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Repositories = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-self: center;
  align-items: center;
  padding:10px;
  flex-wrap:wrap:
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Repo = () => {
  let { handle } = useParams();
  const url = `https://api.github.com/users/${handle}/repos`;
  console.log(handle, "handle --");
  const a = useRepoApi(handle, url);
  console.log(a, "a --");

  const useStyles = makeStyles({
    root: {
      minWidth: 300,
      maxWidth: 300,
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

  const classes = useStyles();

  const userRepo =
    a &&
    Object.values(a).map((e, indice) => {
      return (
        <Repositories>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                variant="h5"
                component="h5"
                gutterBottom
              >
                {e.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Stars: {e.stargazers_count}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Forks: {e.forks}
              </Typography>
              <Typography variant="body2" component="p">
                {e.description}
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Repositories>
      );
    });
  return (
    <div>
      <Link to='/'>
      <Button variant="outlined" color="secondary" width>
        Back
      </Button></Link>
      <Body>
        <h3>{handle} Repositories</h3>
        {userRepo}
      </Body>
    </div>
  );
};

export default Repo;
