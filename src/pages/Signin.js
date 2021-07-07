import React from "react";
import SignIn from "../components/sign-in/SignIn";
import Register from "../components/register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Signin() {
  return (
    <Router>
      <div class="main__form">
        <Switch>
          <Route path="/">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Signin;
