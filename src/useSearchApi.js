import React, { useState, useEffect } from "react";

function UserSearch(handle) {
  const [info, setInfo] = useState({});
  useEffect(() => {
    async function fetchSearch() {
        try {
            if(handle == "") return null
          const res = await fetch(`https://api.github.com/search/users?q=${handle}`);
          const resJSON = await res.json();
          console.log(resJSON, "res --");
          console.log(resJSON, "res --");
          console.log(resJSON.following, "following --");
          console.log(resJSON.followers, "followers --");
          console.log(resJSON.name, "name --");
          console.log(resJSON.avatar_url, "avatar url --");
          console.log(resJSON.email, "email --");
          console.log(resJSON.bio, "bio --");
          setInfo(resJSON)
        } catch (e) {
          console.log("error calling api --", e);
        }
      }
     fetchSearch()
  }, [handle]);
  return info
}

export default UserSearch
