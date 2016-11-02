import React from 'react';

import {Grid, Row, Col, DropdownButton, MenuItem} from 'react-bootstrap';


export default () => (
		<Grid>
			<Row className="show-grid">

				<Col xs={12}>
					<Col xs={2}>
						<h3 className="sort_by"> Sort by </h3>
					</Col>
					<Col xs={2}>
						<DropdownButton title="Best Sellers" id="bg-nested-dropdown">
							<MenuItem eventKey="1">Top Rated</MenuItem>
							<MenuItem eventKey="2">Price: Low to High </MenuItem>
							<MenuItem eventKey="2">Price: High to Low </MenuItem>
						</DropdownButton>
					</Col>
				</Col>

				{/* Temporary, hard-coded products */}
				<Col xs={6} md={4}>
					<img src="product_photos/beach-buddies.jpg" className="product_preview_image"/>
					<h3 className="product_preview_name">Beach Buddies</h3>
					<p className="product_preview_description">Imported from France</p>
				</Col>
				<Col xs={6} md={4}>
					<img src="product_photos/parisian-pineapples.jpg" className="product_preview_image"/>
					<h3 className="product_preview_name">Parisian Pineapplies</h3>
					<p className="product_preview_description">Imported from Germany</p>
				</Col>
				<Col xs={6} md={4}>
					<img src="product_photos/rose-bears.jpg" className="product_preview_image"/>
					<h3 className="product_preview_name">Rose Bears</h3>
					<p className="product_preview_description">Made in the U.S.</p>
				</Col>

				<Col xs={6} md={4}>
					<img src="product_photos/pastel-pearls.jpg" className="product_preview_image"/>
					<h3 className="product_preview_name">Pastel Pearls</h3>
					<p className="product_preview_description">Imported from France</p>
				</Col>
				<Col xs={6} md={4}>
					<img src="product_photos/pumpkin-pie-caramels.jpg" className="product_preview_image"/>
					<h3 className="product_preview_name">Pumpkin Pie Caramels</h3>
					<p className="product_preview_description">Imported from Germany</p>
				</Col>
				<Col xs={6} md={4}>
					<img src="product_photos/red_velvet_caramels.jpg" className="product_preview_image"/>
					<h3 className="product_preview_name">Red Velvet Caramels</h3>
					<p className="product_preview_description">Made in the U.S.</p>
				</Col>

			</Row>
		</Grid>
)
