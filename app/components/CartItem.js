import React from 'react';

import {Grid, Row, Col, Button} from 'react-bootstrap';

// this component is what an individual item looks like in the shopping cart

export default () => (
	<Grid>
		<Row className="show-grid">
			<Col xs={2}>
				<img src="product_photos/beach-buddies.jpg" className="cart_item_photo" />
			</Col>
			<Col xs={2}>
				<p className="cart_item_field"> Beach Buddies </p>
				<p className="cart_item_description"> Playful mix of fruit flavored gummies. </p>
			</Col>
			<Col xs={2}>
				<p className="cart_item_field"> $7.5 </p>
			</Col>
			<Col xs={2}>
				<p className="cart_item_field"> 2 </p>
			</Col>
			<Col xs={2}>
				<p className="cart_item_field"> $15 </p>
			</Col>
			<Col xs={2}>
				<Button className="remove_button"> x </Button>
			</Col>
		</Row>
	</Grid>
)
