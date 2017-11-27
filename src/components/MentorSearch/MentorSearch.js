import React, { Component } from 'react';
import { Col,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Steps extends Component {
  render() {
    return (
      <div className="screen">

        <h3>Mentor Search</h3>
        <Form>
           <Col sm={2}>
          <FormGroup>
            <Label for="goals">Goals</Label>
            <Input type="select" name="goals" id="goals" multiple>
              <option>Education</option>
              <option>Finaincial</option>
              <option>Physical(Health)</option>
              <option>Spiritual</option>
              <option>Other</option>
            </Input>
          </FormGroup>
             </Col>
             <Col sm={2}>
            <FormGroup>
              <Label for="mentorlevel">Mentoring Level</Label>
              <Input type="select" name="mentorlevel" id="mentorlevel" multiple>
                <option>Cheerleader</option>
                <option>Mentor</option>
                <option>Coach</option>
                <option>Tutor</option>

              </Input>
            </FormGroup>
               </Col>
               <Col sm={2}>
              <FormGroup>
                <Label for="contact">Contact Method</Label>
                <Input type="select" name="contact" id="contact" multiple>
                  <option>Email</option>
                  <option>Phone</option>
                  <option>Text</option>

                </Input>
              </FormGroup>
                 </Col>
                 <Col sm={2}>
                <FormGroup>
                  <Label for="availablility">Availablility</Label>
                  <Input type="select" name="availablility" id="availablility" multiple>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                  </Input>
                </FormGroup>
                   </Col>
                   <Col sm={2}>
                  <FormGroup>
                    <Label for="edulevel">Educational Level</Label>
                    <Input type="select" name="edulevel" id="edulevel" multiple>
                      <option>High School Student</option>
                      <option>High School Graduate</option>
                      <option>College Student</option>
                      <option>Associate Degree</option>
                      <option>Bachelors Degree</option>
                      <option>Masters</option>
                      <option>P.H.D</option>
                    </Input>
                  </FormGroup>
                     </Col>
        </Form>
      </div>
    );
  }
}
