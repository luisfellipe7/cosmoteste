import React from "react";
import useSearchApi from "../Hooks/useFetch";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../index.css";

const TotalUsers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 15px;
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  font-size: 20px;
  color: black;
  text-decoration: none;
  position: relative;
  display: block;
  &::hover {
    color: #5caaef;
  }
  &::before {
    content: "";
    border-bottom: solid 1px #5caaef;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
  }
`;

const Users = (props) => {
  let { searchquery } = useParams();
  console.log(searchquery, "searchquery");

  const url = `https://api.github.com/search/users?q=${searchquery}`;

  const a = useSearchApi(searchquery, url);
  console.log(a, "a --");

  const allUsers =
    a &&
    a.items &&
    Object.values(a.items).map((e, indice) => {
      return (
        <p>
          <Link to={`/user/${e.login}`}>{e.login}</Link>
        </p>
      );
    });

  return (
    <TotalUsers>
      Usuarios encontrados
      <div className="link">{allUsers}</div>
      <StyledLink component={Link} to="/">
        <Button variant="outlined" color="secondary" width>
          Back
        </Button>
      </StyledLink>
    </TotalUsers>
  );
};

export default Users;
