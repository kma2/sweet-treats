import React from 'react';

import {Grid, Row, Col, DropdownButton, MenuItem} from 'react-bootstrap';


export default () => (
		<Grid>
			<Row className="show-grid">
				<Col xs={12}>
					<h3> Sort by: </h3>
					<DropdownButton title="Best Sellers" id="bg-nested-dropdown">
						<MenuItem eventKey="1">Top Rated</MenuItem>
						<MenuItem eventKey="2">Price: Low to High </MenuItem>
						<MenuItem eventKey="2">Price: High to Low </MenuItem>
					</DropdownButton>
				</Col>

				<Col xs={6} md={4}>
					<img src="product_photos/beach-buddies.jpg" height="300px" />
					<h3>Beach Buddies</h3>
					<p>Imported from France</p>
					<p>$7</p>
				</Col>
				<Col xs={6} md={4}>
					<img src="product_photos/parisian-pineapples.jpg" height="300px"/>
					<h3>Parisian Pineapplies</h3>
					<p>Imported from Germany</p>
					<p>$6.5</p>
				</Col>
				<Col xs={6} md={4}>
					<img src="product_photos/rose-bears.jpg" height="300px"/>
					<h3>Rose Bears</h3>
					<p>Made in the U.S.</p>
					<p>$8</p>
				</Col>
			</Row>
		</Grid>
)
