import React, {PropTypes, Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';
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
      goals:[],
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectChange2 = this.handleSelectChange2.bind(this);
  }

  handleSelectChange(value) {
    console.log(this.target);
    this.setState({ goals:value });
  }
  handleSelectChange2(value) {
    console.log(this.target);
    this.setState({ contact:value });
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
              <Form>
                 <Col sm={2}>
                <Select multi simpleValue value={this.state.goals} placeholder=" Goals" options={goals} onChange={this.handleSelectChange} />
                </Col>
                <Col sm={2}>
               <Select  simpleValue value={this.state.mentorlevel} placeholder="Mentoring Level" options={mentorlevel} onChange={this.handleSelectChange2} />
               </Col>
               <Col sm={2}>
              <Select multi simpleValue value={this.state.contact} placeholder=" Contact" options={contact} onChange={this.handleSelectChange} />
              </Col>
              <Col sm={2}>
             <Select multi simpleValue value={this.state.availability} placeholder=" Availability" options={availability} onChange={this.handleSelectChange} />
             </Col>
             <Col sm={2}>
            <Select  simpleValue value={this.state.edulevel} placeholder=" Educational Level" options={edulevel} onChange={this.handleSelectChange} />
            </Col>
            <Col sm={2}>
 <Button color="primary" size="sm">Search</Button>{' '}
           </Col>
         </Form>

            </div>
        );
    }
}
