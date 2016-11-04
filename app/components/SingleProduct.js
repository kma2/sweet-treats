import React from 'react';

import {Grid, Row, Col, Button} from 'react-bootstrap';

// use react-rater to implement star ratings

export default () => (
	<Grid>
		<Row className="show-grid">
			<Col xs={12} md={6}>
				<img src="product_photos/parisian-pineapples.jpg" height="500px" />
			</Col>
			<Col xs={12} md={4}>
				<h2> Parisian Pineapples </h2>
				<p>$6.5</p>
				<p>From Paris with love, these darling baby pineapples are made with fresh pineapple purée for an all-natural tropical treat.</p>
				<Col xs={8}>
					<Button block>Add to bag</Button>
				</Col>
			</Col>
		</Row>
	</Grid>
)
