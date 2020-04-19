import React from "react";
import useSearchApi from "../useSearchApi";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const TotalUsers = styled.div`
  padding: 15px;
`;

const Users = (props) => {
  let { searchquery } = useParams();
  console.log(searchquery, "searchquery");

  const a = useSearchApi(searchquery);
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
      Total users found: {a.info && a.info.total_count}
      {allUsers}
    </TotalUsers>
  );
};

export default Users;
