import React, { Component } from 'react';
import './Home.css';
import {Link } from "react-router-dom";
import Menu from '../../assets/components/menu';

class Home extends Component {

  render() {
    return (

      	<div className = "mainDivContainer">
	      <div className = "navigationDiv"> 
	      		<span className="headerSpan">SPOME</span>
	      </div>
	      	<Link to="" className="homeLinks">	
	      		Create new activity
	       	</Link>
	      	<Link to="" className="homeLinks">	
	  			Nearby activities
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
	       	<Menu/>
     	</div>
    );
  }
}

export default Home;
