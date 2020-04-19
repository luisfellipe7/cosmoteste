import React from 'react'
import UserProfile from '../Hooks/useFetch'
import { useParams } from "react-router-dom";

const User = props => {
    let { handle } = useParams();
    const url = `https://api.github.com/users/${handle}`
    console.log(handle, "handle --")
    const info = UserProfile(handle,url)
    console.log(info, "info --")
    return(
        <div>{info.name}</div>
    )
}

export default User