import React from 'react';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap';
import ReactScriptLoaderMixin from 'react-script-loader';

// this component contains all of the shipping, billing, and payment information
// associated with an order, and displays an order summary

var PaymentForm = React.createClass ({

  mixins: [ ReactScriptLoaderMixin ],

  getInitialState: function() {
    return {
      stripeLoading: true,
      stripeLoadingError: false
    };
  },

  getScriptURL: function() {
    return 'https://js.stripe.com/v2/';
  },

  onScriptLoaded: function() {
    if (!PaymentForm.getStripeToken) {
      Stripe.setPublishableKey('pk_test_zDeCOo6tzBA2PWz4VUMJAmcN'); // this is Katy's Stripe Test Publishable key
      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  },

  onScriptError: function() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  },

  render: function() {
    {/* if (this.state.stripeLoading) {
      return <div>Loading</div>;
    }
    else if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    }
    else if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    else { */}

      return (

      	// -------BILLING INFO -------
        <Form horizontal>
          {/*<Col xs={12} md={5}>
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

          </Col> */}

         {/* --------SHIPPING SECTION -----*/}

         <Col xs={12} md={7}>
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

        	{/* -------- STRIPE PAYMENT SECTION -----*/}

            <Col xs={12} md={7}>
              <form onSubmit={this.onSubmit} >
                <span>{ this.state.paymentError }</span><br />
                <input type='text' data-stripe='number' placeholder='credit card number' /><br />
                <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
                <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
                <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
                <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
              </form>
            </Col>


          {/* --------ORDER SUMMARY SECTION -----*/}

           <FormGroup controlId="formHorizontalOrderReview">
            <Col xs={12}>
            	<h3>Order Review</h3>
        	  </Col>
            <Col componentClass={ControlLabel} sm={2}>
              Order Cost:
            </Col>
            <Col sm={10}>
              <FormControl type="Order Cost" placeholder="$20.00" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalTaxShipping">
            <Col componentClass={ControlLabel} sm={2}>
              Tax + Shipping:
            </Col>
            <Col sm={10}>
              <FormControl type="TaxShipping" placeholder="10% + $5.99" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalSubtotal">
            <Col componentClass={ControlLabel} sm={2}>
              Subtotal:
            </Col>
            <Col sm={10}>
              <FormControl type="Subtotal" placeholder="$27.99" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Purchase
              </Button>
            </Col>
          </FormGroup>
        </Form>
      )
    {/* } */}
  },

  onSubmit: function(event) {
    var self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });
    // send form here
    Stripe.createToken(event.target, function(status, response) {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      }
      else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        // make request to your server here!
      }
    });
  }

})

module.exports = PaymentForm;
