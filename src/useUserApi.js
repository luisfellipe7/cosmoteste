import React, { useState, useEffect } from "react";

function UserProfile(handle) {
  const [info, setInfo] = useState({});
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${handle}`);
        const resJSON = await res.json();
        console.log(resJSON, "res --");
        console.log(resJSON, "res --");
        console.log(resJSON.following, "following --");
        console.log(resJSON.followers, "followers --");
        console.log(resJSON.name, "name --");
        console.log(resJSON.avatar_url, "avatar url --");
        console.log(resJSON.email, "email --");
        console.log(resJSON.bio, "bio --");
        setInfo(resJSON);
      } catch (e) {
        console.log("error calling api --", e);
      }
    }
     fetchUser()
  }, [true]);
  return info
}

export default UserProfile
