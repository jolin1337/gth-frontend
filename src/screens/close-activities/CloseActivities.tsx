import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import { inject, observer } from "mobx-react";
import { ActivityStore } from "../../stores/ActivityStore";

interface Props {
  activityStore?: ActivityStore;
}
@inject("activityStore", "activityStore")
@observer
class CloseActivities extends Component<Props> {
  componentDidMount() {
    const { loadActivities } = this.props.activityStore!;
    loadActivities();
  }
  renderAktivities = () => {
    const { isLoading, activities } = this.props.activityStore!;
    if (isLoading || !activities.length) return <p>Laddar. ..</p>;
    return (
      <ul>
        {this.props.activityStore!.activities.map((it: any, idx: number) => (
          <li key={idx}>
            <Link to={"/activity/" + it.id}>{it.name}</Link>
          </li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <div>
        {this.renderAktivities()}
        <Link to="/home" className="homeLinks">
          Gå tillbaka
        </Link>
      </div>
    );
  }
}

export default CloseActivities;
