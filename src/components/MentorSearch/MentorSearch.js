import React, {PropTypes, Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';

import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';
import 'react-select/dist/react-select.css';

const goals = [
    { label: 'Education', value: 'Education' },
    { label: 'Finiancial', value: 'Finiancial' },
    { label: 'Spiritual', value: 'Spiritual' },
    { label: 'Physical(Health)', value: 'Physical' },

];
const contact = [
    { label: 'Email', value: 'Email' },
    { label: 'Phone', value: 'Phone' },
    { label: 'SMS', value: 'SMS' },


];
const mentorlevel = [
    { label: 'Cheer Leader', value: 'Cheerleader' },
    { label: 'Mentor', value: 'Mentor' },
    { label: 'Coach', value: 'Coach' },


];
const availability = [
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
    { label: 'Sunday', value: 'Sunday' },


];
const edulevel = [
    { label: 'High School Student', value: 'High School Student' },
    { label: 'High School Graduate', value: 'High School Graduate' },
    { label: 'College Student', value: 'College Student' },
    { label: 'Associate Degree', value: 'Associate Degree' },
    { label: 'Bachelors', value: 'Bachelors' },
    { label: 'Masters', value: 'Masters' },
    { label: 'P.H.D', value: 'P.H.D' },


];

export default class MentorSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crazy: false,
      contact: [],
      mentorlevel:'',
      goals:[],
      availability:[],
      edulevel:'',
    };
    this.handle_goals = this.handle_goals.bind(this);
    this.handle_mentor_level = this.handle_mentor_level.bind(this);
    this.handle_contact = this.handle_contact.bind(this);
    this.handle_availaiblity = this.handle_availaiblity.bind(this);
    this.handle_edu = this.handle_edu.bind(this);
    this.handle_submit = this.handle_submit.bind(this);

  }

  handle_goals(value) {

    this.setState({ goals:value });
  }
  handle_mentor_level(value) {
    console.log(this.state);
    this.setState({ mentorlevel:value });
  }
  handle_contact(value) {
    console.log(this.state);
    this.setState({ contact:value });
  }
  handle_availaiblity(value) {
    console.log(this.state);
    this.setState({ availability:value });
  }
  handle_edu(value) {
    console.log(this.state);
    this.setState({ edulevel:value });
  }
  handle_submit(event){
    event.preventDefault();
    console.log(this.state);

  }

  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ])
  }

  render () {
        return (
            <div className="screen">
                <h2>Mentor Search</h2>
              <Form onSubmit={this.handle_submit}>
                 <Col sm={2}>
                   <Select multi simpleValue value={this.state.goals} placeholder="Goals " options={goals} onChange={this.handle_goals} />
                </Col>
                <Col sm={2}>
               <Select simpleValue value={this.state.mentorlevel} placeholder="Mentoring Level" options={mentorlevel} onChange={this.handle_mentor_level} />
               </Col>
               <Col sm={2}>
              <Select multi simpleValue value={this.state.contact} placeholder=" Contact" options={contact} onChange={this.handle_contact} />
              </Col>
              <Col sm={2}>
             <Select multi simpleValue value={this.state.availability} placeholder=" Availability" options={availability} onChange={this.handle_availaiblity} />
             </Col>
             <Col sm={2}>
            <Select  simpleValue value={this.state.edulevel} placeholder=" Educational Level" options={edulevel} onChange={this.handle_edu} />
            </Col>
            <Col sm={2}>
                <Button color="primary" size="sm">Search</Button>{' '}
           </Col>
         </Form>

            </div>
        );
    }
}
