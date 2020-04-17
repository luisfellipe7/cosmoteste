import React from "react";
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

const InfoTable = styled.table`
  border-bottom: 1px solid #ddd;
`;

const Home = (props) => {
    const allUsers =
    props.info && props.info.items && props.info.items &&
    Object.values(props.info.items).map((e, indice) => {
      return <p>{e.login}</p>;
    });

  const preventReload = async (r) => {
    r.preventDefault();
    console.log("preventing page reload ---");
    const a = await props.fetchSearch();
    console.log(a, "a --");
    props.setInfo(a);
  }

  return (
    <Body>
      <Title>Github repo search</Title>
      <SearchBox>
        <Search
          placeholder="username"
          onChange={(u) => props.setUser(u.target.value)}
        />
        <SearchButton onClick={(r) => preventReload(r)}>search</SearchButton>
      </SearchBox>
      Total users found: {props.info && props.info.total_count}<br/>
      {allUsers}
    </Body>
  );
};

export default Home;
