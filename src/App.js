import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from  './Components/User'
import Users from './Components/Users'
import Home from "./Components/Home";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        <Home />
        </Route>
        <Route path='/users/:searchquery'>
          <Users />
        </Route>
        <Route path='/user/:handle'>
          <User/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
