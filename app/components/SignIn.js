import React from 'react';

import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, form} from 'react-bootstrap';

export default () => (
  <Grid>
		<Row className="show-grid">
			<Col xs={4}>
				<p> Email </p>
				<p> Password </p>
			</Col>

      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel> Email </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel> Password </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
		</Row>
	</Grid>
)
