import React from 'react';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap';

export default () => (

  <Form horizontal>
      <Col xs={12} md={5}>
        <FormGroup controlId="formHorizontalOrderConfirmed">
          <Col xs={12} className = "thanksForm">
          	<h3>Thanks for your order.</h3>
            <h5>Your purchase details are below</h5>
          </Col>
        </FormGroup>
      </Col>

      <FormGroup controlId="formHorizontalOrderConfirmed" className = "itemsForm">
        <Col xs={12}>
          <h4>Items</h4>
        </Col>
        <Col xs={2}>
          <img src="product_photos/parisian-pineapples.jpg" height="100px" />
        </Col>
        <Col xs={8}>
          <h4> Parisian Pineapples </h4>
        </Col>
        <Col xs={2}>
          <h4> $7.5 </h4>
        </Col>
        <Col xs={12}>
          <Col xs ={8}></Col>
          <Col xs={2}>
            <h4>Order Total</h4>
          </Col>
          <Col xs = {2}>
            <h4>$7.50</h4>
          </Col>
        </Col>
        </FormGroup>

  </Form>

)