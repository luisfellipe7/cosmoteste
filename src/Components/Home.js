import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-family: Gilroy;
`;

const Title = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: Gilroy;
  font-size: 36px;
  padding-top: 20px;
  padding-bottom: 50px;
  color: #070600;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Search = styled.input`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
  outline: none;
  background-color: #f7f7ff;
  margin-bottom: 15px;
`;

const Home = (props) => {
  const [handle, setHandle] = useState("");
  return (
    <Body>
      <Link to="/">
        <Title>Github repo search</Title>
      </Link>
      <SearchBox>
        <Search
          placeholder="username"
          onChange={(u) => setHandle(u.target.value)}
        />
        <Link to={`/users/${handle}`}>
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Link>
      </SearchBox>
    </Body>
  );
};

export default Home;
