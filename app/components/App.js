import React from 'react';
import { Col } from 'react-bootstrap';
//import all containers here and render them then render this component in main.jsx

//add fluid props with value true to add container-fluid class

import NavbarComponent from './Navbar';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="app" >
				<NavbarComponent />
			</div>
		)
	}

}
