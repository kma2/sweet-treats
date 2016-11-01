import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';


export default () => (	
	<Grid>
		<Row className="show-grid">
			<Col xs={4}>
				<img src="http://placehold.it/350x150" />
				<p>Description</p>
				<p>Price</p>
			</Col>
			<Col xs={4}>
				<img src="http://placehold.it/350x150" />
				<p>Description</p>
				<p>Price</p>
			</Col>
			<Col xs={4}>
				<img src="http://placehold.it/350x150" />
				<p>Description</p>
				<p>Price</p>
			</Col>
		</Row>
	</Grid>
)

