import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Alert, Col, Button, Form, Input } from 'reactstrap';
import Select from 'react-select';
import axios from 'axios';
import 'react-select/dist/react-select.css';

const goals = [
  { label: 'Education', value: 'educational' },
  { label: 'Finiancial', value: 'financial' },
  { label: 'Spiritual', value: 'spiritual' },
  { label: 'Physical', value: 'physical' },
  { label: 'Other', value: 'other' },

];
const contact = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'Text', value: 'text' },


];
const mentorlevel = [
  { label: 'Cheer leader', value: 'cheerleader' },
  { label: 'Mentor', value: 'mentor' },
  { label: 'Coach', value: 'coach' },
  { label: 'Tutor', value: 'tutor' },


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
  { label: 'P.H.D', value: 'PHD' },


];

export default class MentorSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfilter: {
        contact: [],
        mentorlevel: '',
        goals: [],
        availability: [],
        edulevel: '',
        name: '',
      },
      response: [],
      error: '',

    };
    this.handleGoals = this.handleGoals.bind(this);
    this.handleMentorLevel = this.handleMentorLevel.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleAvailaiblity = this.handleAvailaiblity.bind(this);
    this.handleEdu = this.handleEdu.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleReset() {
    this.setState({
      searchfilter: {
        ...this.state.searchfilter, name: '', goals: '', mentorlevel: '', contact: '', availability: '', edulevel: '',
      },
      response: '',
    });
  }
  handleInput(event) {
    // console.log(event.target.value);
    this.setState({ searchfilter: { ...this.state.searchfilter, name: event.target.value } });
    // console.log(this.state.searchfilter);
  }

  handleGoals(value) {
    this.setState({ searchfilter: { ...this.state.searchfilter, goals: value } });
    // console.log(this.state.searchfilter);
  }
  handleMentorLevel(value) {
    // console.log(this.state.searchfilter);
    this.setState({ searchfilter: { ...this.state.searchfilter, mentorlevel: value } });
  }
  handleContact(value) {
  //  console.log(this.state.searchfilter);
    this.setState({ searchfilter: { ...this.state.searchfilter, contact: value } });
  }
  handleAvailaiblity(value) {
  //  console.log(this.state.searchfilter);
    this.setState({ searchfilter: { ...this.state.searchfilter, availability: value } });
  }
  handleEdu(value) {
    // console.log(this.state.searchfilter);
    this.setState({ searchfilter: { ...this.state.searchfilter, edulevel: value } });
  }
  handleSubmit(event) {
    event.preventDefault();
    //  if(this.state.searchfilter && this.state.searchfilter.length > 0){
    axios({
      method: 'POST',
      url: '/serverapi/searchmentor.php',
      data: `requesttype=SearchMentor&data=${JSON.stringify(this.state.searchfilter)}`,
    }).then((response) => {
      this.setState({ ...this.state.response, response: response.data });
    //  console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  //  console.log(this.state.response);

    // }else{
    //
    //   this.setState({ error:'Empty Search Queries' });
    //   }
  }
  // static propTypes = {
  //   label: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.array,
  //     PropTypes.object,
  //   ])
  // }

  render() {
    return (
      <div className="screen">
        <h2>Mentor Search</h2>


        <Col sm={2}>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              name="name"
              value={this.state.searchfilter.name}
              id="exampleEmail"
              placeholder="Enter A Mentor Name"
              onInput={this.handleInput}
            />
            <br />
            <Select
              multi
              simpleValue
              value={this.state.searchfilter.goals}
              placeholder="Goals "
              options={goals}
              onChange={this.handleGoals}
            />
            <br />


            <Select
              simpleValue
              value={this.state.searchfilter.mentorlevel}
              placeholder="Mentoring Level"
              options={mentorlevel}
              onChange={this.handleMentorLevel}
            />
            <br />

            <Select
              multi
              simpleValue
              value={this.state.searchfilter.contact}
              placeholder=" Contact"
              options={contact}
              onChange={this.handleContact}
            />
            <br />

            <Select
              multi
              simpleValue
              value={this.state.searchfilter.availability}
              placeholder=" Availability"
              options={availability}
              onChange={this.handleAvailaiblity}
            />
            <br />

            <Select
              simpleValue
              value={this.state.searchfilter.edulevel}
              placeholder=" Educational Level"
              options={edulevel}
              onChange={this.handleEdu}
            />
            <br />
            <Button color="primary" size="sm">Search</Button>  <Button color="info" size="sm" onClick={this.handleReset}>Reset</Button><br /><br />{' '}
            {this.state.error ?
              <Alert color="danger">
                {this.state.error}
              </Alert> : null}
          </Form>
        </Col>
        <Col sm={10}>
          <ListGroup>

            {this.state.response.count > 0 ?

           Object.keys(this.state.response.response).map((key) => {
             const result = this.state.response.response;
        return (
          <ListGroupItem className="justify-content-between">

              Name : {result[key].name} ,
              Email :{result[key].email} ,
              Phone : {result[key].phone} ,
              Goals : {result[key].goals}
            <br />
              Services: {result[key].service},
               Mentoring Level : {result[key].mentoring_level},
               Education : {result[key].education}, Availaiblity Days : {result[key].av_day}
            <br />
              Availability Time :{result[key].av_time}
              Contact Type : {result[key].contact_type}, Week Frequency : {result[key].weektalk}

          </ListGroupItem>
        );
    })
    : 'There was no mentor found for the search query'}


          </ListGroup>

        </Col>


      </div>
    );
  }
}
