import React from 'react';

import {Grid, Row, Col, Button} from 'react-bootstrap';

// this component is what an individual item looks like in the shopping cart

export default () => (	
	<Grid>
		<Row className="show-grid">
			<Col xs={3}>
				<h3> Product Name </h3>
				<img src="http://placehold.it/140x100" />
			</Col>
			<Col xs={3}>
				<h3> Price </h3>
				<p>$$$ </p>
			</Col>
			<Col xs={3}>
				<h3> Quantity </h3>
				<p> number </p>
			</Col>
			<Col xs={3}>
				<h3> Subtotal </h3>
				<p> $$$ </p>
			</Col>
		</Row>
	</Grid>
)