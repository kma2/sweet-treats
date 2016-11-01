import React from 'react';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

// component for users to log into their accounts

export default () => (
  <Grid>
		<Row className="show-grid">

      <h1> Sign In </h1>

			<Col xs={6}>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}> Email </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}> Password </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit"> Sign in </Button>
              <p> Dont have an account? Create one!  </p>
            </Col>
          </FormGroup>
        </Form>
      </Col>

		</Row>
	</Grid>
)
