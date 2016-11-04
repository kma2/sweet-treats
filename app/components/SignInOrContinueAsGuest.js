import React from 'react';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap';

import SignIn from './SignIn';

// before checkout, users can either 1) log into their account (if they have one)
// or 2) continue checking out as a guest

export default () => (
  <Grid>
		<Row className="show-grid">
      <Col xs={12}>
        <Col xs={12} md={5}>
          <SignIn />
        </Col>
        <Col md={2}></Col>
        <Col xs={12} md={5}>
          <h1> Continue as Guest </h1>
          <Button type="submit"> Continue To Checkout As Guest </Button>
        </Col>
      </Col>

		</Row>
	</Grid>
)
