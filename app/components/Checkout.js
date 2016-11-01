import React from 'react';

import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap';

export default () => (

	// -------BILLING INFO -------
  <Form horizontal>
    <FormGroup controlId="formHorizontalFirstName">
      <Col xs={12}>
      	<h2>Billing Information</h2>
      </Col>
      <Col componentClass={ControlLabel} sm={2}>
        First Name:
      </Col>
      <Col sm={10}>
        <FormControl type="first-name" placeholder="First Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalLastName">
      <Col componentClass={ControlLabel} sm={2}>
        Last Name:
      </Col>
      <Col sm={10}>
        <FormControl type="Last Name" placeholder="Last Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalAddress">
      <Col componentClass={ControlLabel} sm={2}>
        Street Address:
      </Col>
      <Col sm={10}>
        <FormControl type="Street Address" placeholder="Street Address" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalAddress2">
      <Col componentClass={ControlLabel} sm={2}>
        Street Address (2):
      </Col>
      <Col sm={10}>
        <FormControl type="Street Address(2)" placeholder="Street Address" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalCity">
      <Col componentClass={ControlLabel} sm={2}>
        City:
      </Col>
      <Col sm={10}>
        <FormControl type="City" placeholder="City" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalState">
      <Col componentClass={ControlLabel} sm={2}>
        State/Province:
      </Col>
      <Col sm={10}>
        <FormControl type="State/Province" placeholder="State/Province" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalZipCode">
      <Col componentClass={ControlLabel} sm={2}>
        Zip/Postal Code:
      </Col>
      <Col sm={10}>
        <FormControl type="Zip/Postal Code" placeholder="Zip/Postal Code" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalCountry">
      <Col componentClass={ControlLabel} sm={2}>
        Country:
      </Col>
      <Col sm={10}>
        <FormControl type="Country" placeholder="Country" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPhone">
      <Col componentClass={ControlLabel} sm={2}>
        Phone:
      </Col>
      <Col sm={10}>
        <FormControl type="Phone" placeholder="Phone" />
      </Col>
    </FormGroup>

   {/* --------SHIPPING SECTION -----*/}

   <Form horizontal>
    <FormGroup controlId="formHorizontalFirstName">
      <Col xs={12}>
      	<h2>Shipping Information</h2>
      	<Checkbox>Same as Billing</Checkbox>
      </Col>
      <Col componentClass={ControlLabel} sm={2}>
        First Name:
      </Col>
      <Col sm={10}>
        <FormControl type="first-name" placeholder="First Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalLastName">
      <Col componentClass={ControlLabel} sm={2}>
        Last Name:
      </Col>
      <Col sm={10}>
        <FormControl type="Last Name" placeholder="Last Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalAddress">
      <Col componentClass={ControlLabel} sm={2}>
        Street Address:
      </Col>
      <Col sm={10}>
        <FormControl type="Street Address" placeholder="Street Address" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalAddress2">
      <Col componentClass={ControlLabel} sm={2}>
        Street Address (2):
      </Col>
      <Col sm={10}>
        <FormControl type="Street Address(2)" placeholder="Street Address" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalCity">
      <Col componentClass={ControlLabel} sm={2}>
        City:
      </Col>
      <Col sm={10}>
        <FormControl type="City" placeholder="City" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalState">
      <Col componentClass={ControlLabel} sm={2}>
        State/Province:
      </Col>
      <Col sm={10}>
        <FormControl type="State/Province" placeholder="State/Province" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalZipCode">
      <Col componentClass={ControlLabel} sm={2}>
        Zip/Postal Code:
      </Col>
      <Col sm={10}>
        <FormControl type="Zip/Postal Code" placeholder="Zip/Postal Code" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalCountry">
      <Col componentClass={ControlLabel} sm={2}>
        Country:
      </Col>
      <Col sm={10}>
        <FormControl type="Country" placeholder="Country" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPhone">
      <Col componentClass={ControlLabel} sm={2}>
        Phone:
      </Col>
      <Col sm={10}>
        <FormControl type="Phone" placeholder="Phone" />
      </Col>
    </FormGroup>
   </Form>

	{/* --------PAYMENT SECTION -----*/}
     <FormGroup controlId="formHorizontalCreditCard">
      <Col xs={12}>
      	<h3>Payment</h3>
  	  </Col>
      <Col componentClass={ControlLabel} sm={2}>
        Credit Card Number:
      </Col>
      <Col sm={10}>
        <FormControl type="Credit Card Number" placeholder="Credit Card Number" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalExpiration">
      <Col componentClass={ControlLabel} sm={2}>
        Expiration Date:
      </Col>
      <Col sm={10}>
        <FormControl type="Expiration Date" placeholder="Expiration Date" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Submit
        </Button>
      </Col>
    </FormGroup>
  </Form>

)
