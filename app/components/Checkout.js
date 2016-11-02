import React from 'react';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap';

// this component contains all of the shipping, billing, and payment information
// associated with an order, and displays an order summary

export default () => (

	// -------BILLING INFO -------

  <Form horizontal>
    <Col xs={12} md={5}>
      <FormGroup controlId="formHorizontalFirstName">
        <Col xs={12}>
        	<h3>Billing Information</h3>
        </Col>
        <Col componentClass={ControlLabel} sm={5}>
          First Name:
        </Col>
        <Col sm={7}>
          <FormControl type="first-name" placeholder="First Name" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalLastName">
        <Col componentClass={ControlLabel} sm={5}>
          Last Name:
        </Col>
        <Col sm={7}>
          <FormControl type="Last Name" placeholder="Last Name" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalAddress">
        <Col componentClass={ControlLabel} sm={5}>
          Street Address:
        </Col>
        <Col sm={7}>
          <FormControl type="Street Address" placeholder="Street Address" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalAddress2">
        <Col componentClass={ControlLabel} sm={5}>
          Street Address (2):
        </Col>
        <Col sm={7}>
          <FormControl type="Street Address(2)" placeholder="Street Address" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalCity">
        <Col componentClass={ControlLabel} sm={5}>
          City:
        </Col>
        <Col sm={7}>
          <FormControl type="City" placeholder="City" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalState">
        <Col componentClass={ControlLabel} sm={5}>
          State/Province:
        </Col>
        <Col sm={7}>
          <FormControl type="State/Province" placeholder="State/Province" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalZipCode">
        <Col componentClass={ControlLabel} sm={5}>
          Zip/Postal Code:
        </Col>
        <Col sm={7}>
          <FormControl type="Zip/Postal Code" placeholder="Zip/Postal Code" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalCountry">
        <Col componentClass={ControlLabel} sm={5}>
          Country:
        </Col>
        <Col sm={7}>
          <FormControl type="Country" placeholder="Country" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPhone">
        <Col componentClass={ControlLabel} sm={5}>
          Phone:
        </Col>
        <Col sm={7}>
          <FormControl type="Phone" placeholder="Phone" />
        </Col>
      </FormGroup>

    </Col>

   {/* --------SHIPPING SECTION -----*/}

   <Col xs={12} md={5}>
     <Form horizontal>
      <FormGroup controlId="formHorizontalFirstName">
        <Col xs={12}>
        	<h3>Shipping Information</h3>
        	<Checkbox>Same as Billing</Checkbox>
        </Col>
        <Col componentClass={ControlLabel} sm={5}>
          First Name:
        </Col>
        <Col sm={7}>
          <FormControl type="first-name" placeholder="First Name" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalLastName">
        <Col componentClass={ControlLabel} sm={5}>
          Last Name:
        </Col>
        <Col sm={7}>
          <FormControl type="Last Name" placeholder="Last Name" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalAddress">
        <Col componentClass={ControlLabel} sm={5}>
          Street Address:
        </Col>
        <Col sm={7}>
          <FormControl type="Street Address" placeholder="Street Address" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalAddress2">
        <Col componentClass={ControlLabel} sm={5}>
          Street Address (2):
        </Col>
        <Col sm={7}>
          <FormControl type="Street Address(2)" placeholder="Street Address" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalCity">
        <Col componentClass={ControlLabel} sm={5}>
          City:
        </Col>
        <Col sm={7}>
          <FormControl type="City" placeholder="City" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalState">
        <Col componentClass={ControlLabel} sm={5}>
          State/Province:
        </Col>
        <Col sm={7}>
          <FormControl type="State/Province" placeholder="State/Province" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalZipCode">
        <Col componentClass={ControlLabel} sm={5}>
          Zip/Postal Code:
        </Col>
        <Col sm={7}>
          <FormControl type="Zip/Postal Code" placeholder="Zip/Postal Code" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalCountry">
        <Col componentClass={ControlLabel} sm={5}>
          Country:
        </Col>
        <Col sm={7}>
          <FormControl type="Country" placeholder="Country" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPhone">
        <Col componentClass={ControlLabel} sm={5}>
          Phone:
        </Col>
        <Col sm={7}>
          <FormControl type="Phone" placeholder="Phone" />
        </Col>
      </FormGroup>
     </Form>
    </Col>

	{/* --------PAYMENT SECTION -----*/}
    <Col xs={12} md={5}>
       <FormGroup controlId="formHorizontalCreditCard">
        <Col xs={12}>
        	<h3>Payment</h3>
    	  </Col>
        <Col componentClass={ControlLabel} sm={5}>
          Credit Card Number:
        </Col>
        <Col sm={7}>
          <FormControl type="Credit Card Number" placeholder="Credit Card Number" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalExpiration">
        <Col componentClass={ControlLabel} sm={5}>
          Expiration Date:
        </Col>
        <Col sm={7}>
          <FormControl type="Expiration Date" placeholder="Expiration Date" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Confirm Purchase
          </Button>
        </Col>
      </FormGroup>
    </Col>

  </Form>
)
