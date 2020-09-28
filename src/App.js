import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";
import Logic from "./Logic";
import ProgressBar from "./ProgressBar";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import NewGameAgain from "./components/NewGameAgain";
import Home from "./Home";

function App() {
  return (
    <div>
      {/* <Logic /> */}
      <Dashboard />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Game1" component={Logic}></Route>
        <Route exact path="/Game2" component={NewGameAgain}></Route>
      </Switch>
    </div>
  );
}

export default App;
