import React, { useState } from "react";
import Home from "./Components/Home";

const App = (props) => {
  const [user, setUser] = useState("");
  const [info, setInfo] = useState({});

  async function fetchUser() {
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const resJSON = await res.json();
      console.log(resJSON, "res --");
      console.log(resJSON, "res --");
      console.log(resJSON.following, "following --");
      console.log(resJSON.followers, "followers --");
      console.log(resJSON.name, "name --");
      console.log(resJSON.avatar_url, "avatar url --");
      console.log(resJSON.email, "email --");
      console.log(resJSON.bio, "bio --");
      return resJSON;
    } catch (e) {
      console.log("error calling api --", e);
    }
  }

  async function fetchSearch() {
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${user}`);
      const resJSON = await res.json();
      console.log(resJSON, "res --");
      console.log(resJSON, "res --");
      console.log(resJSON.following, "following --");
      console.log(resJSON.followers, "followers --");
      console.log(resJSON.name, "name --");
      console.log(resJSON.avatar_url, "avatar url --");
      console.log(resJSON.email, "email --");
      console.log(resJSON.bio, "bio --");
      return resJSON;
      // console.log(setInfo, "set info --");
      // console.log(info, "info")
    } catch (e) {
      console.log("error calling api --", e);
    }
  }
  return (
    <div>
      <Home fetchSearch={fetchSearch} fetchUser={fetchUser} info={info} setUser={setUser} setInfo={setInfo} />
    </div>
  );
};
export default App;
