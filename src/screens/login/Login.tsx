import React, { Component } from "react";
import "./Login.css";
import logo from "../../logo.svg";
import { inject, observer } from "mobx-react";
import { ActivityStore } from "../../stores/ActivityStore";

interface Props {
  activityStore?: ActivityStore;
}
@inject("activityStore", "activityStore")
@observer
class Login extends Component<Props> {
  componentDidMount() {
    const { loadActivities } = this.props.activityStore!;
    loadActivities();
  }

  renderAktiviteter = () => {
    const { isLoading, activities } = this.props.activityStore!;
    if (isLoading || !activities.length) return <p>Laddar. ..</p>;
    return (
      <ul>
        {this.props.activityStore!.activities.map(it => (
          <li>aktivitet {it}</li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <form className="LoginPage" action="/home" method="GET">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.renderAktiviteter()}
        <label htmlFor="name">Name:</label>
        <input required type="text" id="name" />
        <label htmlFor="password">Password:</label>
        <input required type="text" id="password" />
        <input type="submit" value="Login" />
        <a href="#" className="App-link Register-account">
          Register account
        </a>
      </form>
    );
  }
}

export default Login;
