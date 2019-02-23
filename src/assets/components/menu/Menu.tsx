import React, { Component } from 'react';
import './Menu.css';
import {Link } from "react-router-dom";
import kugg from './img/kugg.png';
import person from './img/person.png';
import home from './img/home.png';

class Menu extends Component {

  render() {
    return (

	       	<div className="bottomDiv">
	       		<a href="#">
	       			<img src={kugg} height="34px"/>
	       		</a>
	       		<img src={person} height="35px"/>
	       		<img src={home} height="35px"/>
	       	</div>
     	
    );
  }
}

export default Menu;
