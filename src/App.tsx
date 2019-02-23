import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import { ActivityStore } from "./stores";

import CreateActivity from './screens/create-activity';
import CloseActivities from './screens/close-activities';
import Login from "./screens/login";
import Home from "./screens/home/Home";
import "./App.css";

configure({ enforceActions: "observed" });

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Router>
          <Provider activityStore={ActivityStore}>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/activity/create" exact component={CreateActivity} />
              <Route path="/activity" exact component={CloseActivities} />
            </Switch>
          </Provider>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
