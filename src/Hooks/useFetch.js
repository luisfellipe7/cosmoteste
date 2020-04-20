import { useState, useEffect } from "react";

function UserSearch(handle, url) {
  const [info, setInfo] = useState({});
  useEffect(() => {
    async function fetchSearch() {
        try {
            if(handle === "") return null
          const res = await fetch(url);
          const resJSON = await res.json();
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
