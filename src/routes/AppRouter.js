import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DetailScreen } from "../components/e-commerce/DetailScreen";
import { MainScreen } from "../components/e-commerce/MainScreen";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route path="/product/:id" component={DetailScreen} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
