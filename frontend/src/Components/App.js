import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Info from "../routes/Info";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/detail/:gubunEn" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
