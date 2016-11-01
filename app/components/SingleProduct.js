import React from 'react';

import {Grid, Row, Col, Button} from 'react-bootstrap';

// use react-rater to implement star ratings

export default () => (	
	<Grid>
		<Row className="show-grid">
			<Col xs={6}>
				<img src="http://placehold.it/350x150" />
			</Col>
			<Col xs={6}>
				<h1> Product Name </h1>
				<p>Price</p>
				<p>Description</p>
				<Button block>Add to bag</Button>
			</Col>
		</Row>
	</Grid>
)