import React from 'react'
import UserProfile from '../useUserApi'
import { useParams } from "react-router-dom";

const User = props => {
    let { handle } = useParams();
    console.log(handle, "handle --")
    const info = UserProfile(handle)
    console.log(info, "info --")
    return(
        <div>{info.name}</div>
    )
}

export default User