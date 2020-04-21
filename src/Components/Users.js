import React from "react";
import useSearchApi from "../Hooks/useFetch";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";

const TotalUsers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 15px;
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
      <h5>
        mostrando {a && a.items && a.items.length} resultados de{" "}
        {a && a.total_count}
      </h5>
      <Link to="/">
        <Button variant="outlined" color="secondary" width>
          Back
        </Button>
      </Link>
    </TotalUsers>
  );
};

export default Users;
