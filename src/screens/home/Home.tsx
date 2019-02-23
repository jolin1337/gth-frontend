import React, { Component } from 'react';
import './Home.css';
import {Link } from "react-router-dom";


class Home extends Component {

  render() {
    return (
      <div className = "mainDivContainer">
      	<Link to="" className="homeLinks">	
      		Create new activity
       	</Link>
      	<Link to="" className="homeLinks">	
  			Activities close to you
       	</Link>
       	<div className="plannedActivities">
       		<p>My planned activities</p>
       		<hr></hr>
       			<ul>
       				<li>Running</li>
       				<li>Football</li>
       				<li>Basketball</li>
       				<li>Walk in the park</li>
       				<li>Chill</li>
       			</ul>
       	</div>
      </div>
    );
  }
}

export default Home;
