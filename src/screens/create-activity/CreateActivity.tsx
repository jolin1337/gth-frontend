import React, { Component } from 'react';
import Creatable from 'react-select/lib/Creatable';
import activityTypes from '../../assets/data/activity-types.json';
import './CreateActivity.css';
import logo from '../../logo.svg';
import Map from '../../assets/components/map';

const styles = {
  option: (styles : object) => ({ ...styles, color: "black" })
}

class CreateActivity extends Component {
  render() {
    return (
      <form className="CreateActivityPage" action="/acitivty/1" method="GET">
        <h2>Create a new activity</h2>
        <label htmlFor="activityType">Activity type</label>
        <p/>
        <Creatable className="Activity-type" id="activityType"
          defaultValue={activityTypes['activityTypes'][0]}
          options={activityTypes['activityTypes']}
          styles={styles}
        />
        <p/>
        <Map editable={true} />
        <div><label htmlFor="meetingTime">Meeting time</label></div>
        <input type="date" id="meetingPoint" className="datetime"/>
        <input type="time" id="time" className="datetime"/>
        <label htmlFor="maxParticipants">Max participants</label>
        <input type="number" id="maxParticipants"/>
        <textarea placeholder="Description"></textarea>
        <input type="submit" />
      </form>
    );
  }
}

export default CreateActivity;
