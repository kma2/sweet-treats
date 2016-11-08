import React from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
// component for users to log into their accounts

export default class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render () {
    return (
      <Grid>
        <Row className="show-grid">

          <h2> Sign In </h2>

          <Col xs={6}>
            <Form horizontal onSubmit={this.onSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}> Email </Col>
                <Col sm={10}>
                  <FormControl name="email" type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}> Password </Col>
                <Col sm={10}>
                  <FormControl name="password" type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit"> Sign in </Button>
                  <p> Dont have an account? Create one! </p>
                </Col>
              </FormGroup>
            </Form>
          </Col>

        </Row>
      </Grid>
    )
  }

  onSubmit(event) {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    axios.post('/api/user/login', credentials)
    .catch(err => console.error(err));
  }
}
