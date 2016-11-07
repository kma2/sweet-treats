import React from 'react';
import { Col } from 'react-bootstrap';
//import all containers here and render them then render this component in main.jsx

//add fluid props with value true to add container-fluid class

import NavbarComponent from './Navbar';
import AllProductsContainer from '../containers/AllProductsContainer';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="app" >
				<NavbarComponent />
				{ this.props.children }
			</div>
		)
	}

}
