import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./Components/User";
import Users from "./Components/Users";
import Home from "./Components/Home";
import Repo from "./Components/Repo";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users/:searchquery">
          <Users />
        </Route>
        <Route path="/user/:handle">
          <User />
        </Route>
        <Route path="/repo/:handle/">
          <Repo />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
