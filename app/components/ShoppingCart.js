import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import CartItem from './CartItem';

// this component contains all the cart items in a user's shopping cart

export default () => (	
	<Grid>
		<Row className="show-grid">
			<Col xs={12}> 
				<h1> Shopping Cart </h1>
			</Col>
		</Row>
		<Row className="show-grid">
			<Col xs={12}> 
				<CartItem />
			</Col>
			<Col xs={12}> 
				<CartItem />
			</Col>
			<Col xs={12}> 
				<CartItem />
			</Col>
		</Row>
		<Row className="show-grid">
			<Col xs={9}> 
				<h2> Subtotal </h2> 
			</Col>
			<Col xs={3}> 
				<h2> $$$ </h2>  
			</Col>
		</Row>
		<Row className="show-grid">
			<Col xs={9}></Col>
			<Col xs={3}>
				<Button block>Checkout</Button>
			</Col>
		</Row>
	</Grid>
)