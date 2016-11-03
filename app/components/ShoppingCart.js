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

		<div className="cart_items">

			{/* Shopping cart fields */}
			<Row className="show-grid">
				<Col xs={12} className="cart_heading">
					<Col xs={2}>
					</Col>
					<Col xs={2}>
						<p className="cart_heading_field"> Product </p>
					</Col>
					<Col xs={2}>
						<p className="cart_heading_field"> Price </p>
					</Col>
					<Col xs={2}>
						<p className="cart_heading_field"> Quantity </p>
					</Col>
					<Col xs={2}>
						<p className="cart_heading_field"> Subtotal </p>
					</Col>
					<Col xs={2}>
					</Col>
				</Col>
			</Row>

			{/* TEMPORARY: hard-coded shopping cart items */}
			<Row className="show-grid">
				<Col xs={12}>
					<CartItem />
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={12}>
					<CartItem />
				</Col>
			</Row>

			{/* Total cost */}
			<Row className="show-grid">
				<Col xs={8} className="cart_item_heading">
				</Col>
				<Col xs={2} className="cart_item_field">
					<p className="cart_item_heading"> Total </p>
				</Col>
				<Col xs={2} className="cart_item_field">
					<p className="cart_item_heading"> $30 </p>
				</Col>
			</Row>

		</div>

	</Grid>
)
