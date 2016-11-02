import React from 'react';

import {Grid, Row, Col, Button} from 'react-bootstrap';

// use react-rater to implement star ratings
// TO DO: add rating stars

export default () => (
	<div className="single_product">
	<Grid>
		<Row className="show-grid">
			<Col xs={12} md={6}>
				<img src="product_photos/parisian-pineapples.jpg" className="product_image" />
			</Col>
			<Col xs={12} md={4}>
				<p className="product_name"> Parisian Pineapples </p>
				<p className="product_price">$6.5</p>
				<p>From Paris with love, these darling baby pineapples are made with fresh pineapple purée for an all-natural tropical treat.</p>
				<Col xs={6} className="add_to_bag">
					<Button block>Add to bag</Button>
				</Col>
			</Col>
		</Row>
	</Grid>
	</div>
)
