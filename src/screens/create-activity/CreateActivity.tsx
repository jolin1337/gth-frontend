import React, { Component } from "react";
import Creatable from "react-select/lib/Creatable";
import "./CreateActivity.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import Map from "../../assets/components/map";
import { inject, observer } from "mobx-react";
import { ActivityStore } from "../../stores/ActivityStore";
const activityTypes = require("../../assets/data/activity-types.json");

const styles = {
  option: (styles: object) => ({ ...styles, color: "black" })
};
interface State {
  name: string;
  description: string;
  attendees: number;
  time: string;
  date: string;
  longitude: number | null;
  latitude: number | null;
  userId: number;
}

interface Props {
  activityStore?: ActivityStore;
}
@inject("activityStore", "activityStore")
@observer
class CreateActivity extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      attendees: 1,
      time: "",
      date: "",
      longitude: null,
      latitude: null,
      userId: 1
    };
  }
  createActivity = () => {
    const {
      name,
      description,
      attendees,
      longitude,
      latitude,
      userId,
      date,
      time
    } = this.state;
    const activity = {
      name,
      description,
      attendees,
      time: `${date} ${time}`,
      longitude,
      latitude,
      userId
    };
    this.props.activityStore!.addActivity(activity);
  };

  setName = (name: any) => {
    this.setState({ ...this.state, name: name.target.value });
  };

  setTime = (time: any) => {
    this.setState({ ...this.state, time: time.target.value });
  };

  setDate = (dt: any) => {
    this.setState({ ...this.state, date: dt.target.value });
  };

  setLocation = (value: any) => {
    const vals = value.split(",");
    this.setState({ ...this.state, longitude: vals[0], latitude: vals[1] });
  };

  /*
  <Creatable className="Activity-type" id="activityType"
    defaultValue={activityTypes['activityTypes'][0]}
    options={activityTypes['activityTypes']}
    styles={styles}
  />
*/

  render() {
    return (
      <>
        <form className="CreateActivityPage" action="/acitivty/1" method="GET">
          <h2>Create a new activity</h2>
          <label htmlFor="naame">Aktivitetsnamn</label>
          <input type="text" id="naame" onChange={this.setName} />
          <p />
          <Map editable={true} onChange={this.setLocation} />
          <div>
            <label htmlFor="meetingTime">Meeting time</label>
          </div>
          <input
            type="date"
            id="meetingPoint"
            className="datetime"
            onChange={this.setDate}
          />
          <input
            type="time"
            id="time"
            className="datetime"
            onChange={this.setTime}
          />
          <label htmlFor="maxParticipants">Max participants</label>
          <input type="number" id="maxParticipants" />
          <textarea placeholder="Description" />
          <input type="button" onClick={this.createActivity} />
        </form>
        <Link to="/home" className="homeLinks">
          Gå tillbaka
        </Link>
      </>
    );
  }
}

export default CreateActivity;
