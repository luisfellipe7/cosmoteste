import React from  'react'
import { useParams } from "react-router-dom";
import useRepoApi from "../Hooks/useFetch";
import styled from 'styled-components'

const Repo = () => {
    let { handle } = useParams();
    const url = `https://api.github.com/users/${handle}/repos`;
    console.log(handle, "handle --");
    const a = useRepoApi(handle, url);
    console.log(a, "a --");
  
    const userRepo =
      a &&
      Object.values(a).map((e, indice) => {
        return (
          <p>
            {e.name}
            {e.stargazers_count}
            {e.forks}
            {e.description}
          </p>
        );
      });
    return(
        <div>
            {userRepo}
        </div>
    )
}

export default Repo