import React from 'react';
import { Col } from 'react-bootstrap';
//import all containers here and render them then render this component in main.jsx

//add fluid props with value true to add container-fluid class

import Navbar from './Navbar';
import AllProducts from './AllProducts'
import SingleProduct from './SingleProduct';
import ShoppingCart from './ShoppingCart';


export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div id="app" >
				<Navbar />
				{/*<AllProducts />
				<SingleProduct /> */}
				<ShoppingCart />

			</div>
		)
	}

}