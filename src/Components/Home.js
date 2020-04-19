import React, {useState} from "react";
import { Link } from "react-router-dom";

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
  width: 150px;
  padding-right: 20px;
  border-radius: 28px;
  border: 1px solid #fff;
  color: #ea526e;
  height: 30px;
  text-align: center;
  margin-bottom: 15px;
  font-size: 16px;
`;

const SearchButton = styled.div`
  display: flex;
  align-self: center;
  background-color: #55c6fa;
  border-radius: 28px;
  border: 1px solid #ffffff;
  display: inline-block;
  cursor: pointer;
  color: #ea526e;
  font-size: 16px;
  padding: 9px 50px;
  text-decoration: none;
  width: 80px;
`;

const Home = (props) => {
  const [handle, setHandle] =useState("")

  return (
    <Body>
          <Link to='/user'><Title>Github repo search</Title></Link>
        <SearchBox>
          <Search
            placeholder="username"
            onChange={(u) => setHandle(u.target.value)}
          />
          <Link to={`/users/${handle}`}>Search</Link>
        </SearchBox>
    </Body>
  );
};

export default Home;
