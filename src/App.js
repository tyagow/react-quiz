import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home/Home";
import NewQuestionScreen from "./container/NewQuestionScreen/NewQuestionScreen";
import { NotFound } from "./container/NotFound/NotFound";
import NavHeader from "./components/NavHeader/index";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavHeader />
        <Switch>
          <Route exact path="/react-quiz/" component={Home} />
          <Route
            path="/react-quiz/question/:id"
            component={NewQuestionScreen}
          />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
