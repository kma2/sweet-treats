import React from 'react';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap';

export default () => (

  <Form horizontal>
      <Col xs={12} md={5}>
        <FormGroup controlId="formHorizontalOrderConfirmed">
          <Col xs={12}>
          	<h3>Thanks for your order.</h3>
            <h5>Your purchase details are below</h5>
          </Col>
        </FormGroup>
      </Col>

      <FormGroup controlId="formHorizontalOrderConfirmed">
        <Col xs={12}>
          <h4>Items</h4>
        </Col>
        <Col xs={2}>
          <img src="product_photos/parisian-pineapples.jpg" height="100px" />
        </Col>
        <Col xs={8}>
          <h6> Parisian Pineapples </h6>
        </Col>
        <Col xs={2}>
          <h6> $6.5 </h6>
        </Col>
        <Col xs={12}>
          <Col xs ={8}></Col>
          <Col xs={2}>
            <h4>Order Total</h4>
          </Col>
          <Col xs = {2}>
            <h6>$6.50</h6>
          </Col>
        </Col>
        </FormGroup>

  </Form>

)