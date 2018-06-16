import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./container/Home/Home";
import NewQuestionScreen from "./container/NewQuestionScreen/NewQuestionScreen";
import { NotFound } from "./container/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/question/new" component={NewQuestionScreen} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
