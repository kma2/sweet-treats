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
                  <img src="product_photos/parisian-pineapples.jpg" height="200px" />
                </Col>
                <Col xs={8}>
                  <h6> Parisian Pineapples </h6>
                </Col>
                <Col xs={2}>
                  <h6> $6.5 </h6>
                </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalOrderConfirmed">
              <Col xs={12}>
                <h4>Payment</h4>
              </Col>
                <Col xs={6}>
                  <h5>Billing Address</h5>

                    
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


                </Col>
                <Col xs={6}>
                  <h5>Shipping Address</h5>
                </Col>
          </FormGroup>
        

</Form>

)


//order summary from checkout, 