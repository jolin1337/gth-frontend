import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import { ActivityStore } from "./stores";

import Login from "./screens/login";
import Home from "./screens/home/Home";
import "./App.css";
configure({ enforceActions: "observed" });

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Provider activityStore={ActivityStore}>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/home" component={Home} />
            </Switch>
          </Provider>
        </Router>
      </div>
    );
  }
}

export default App;
