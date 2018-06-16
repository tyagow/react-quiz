import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/Home/Home";
import NewQuestionScreen from "./container/NewQuestionScreen/NewQuestionScreen";
import { NotFound } from "./container/NotFound/NotFound";
import NavHeader from "./components/NavHeader/index";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/question/new" component={NewQuestionScreen} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
