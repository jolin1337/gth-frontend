import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './screens/login';
import Home from './screens/home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Login} />
            <Route path="/home/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
