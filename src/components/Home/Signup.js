import React, {Component} from "react";
import axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';

export class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {
      },
      formValidate:{
        passwordValid: false

      }
    }
  }
  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignUp(this.state.formValues);
    this.formValidations(this.state.formValues);
    console.log("form into SQL", this.state.formValues);
    //send data to API
    axios({
      method: 'POST',
      url: 'custom_mentor/serverapi/user.php',
      data: "requesttype=Signup&data=" + (JSON.stringify(this.state.formValues))
    }).then(function(response) {
      //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
      console.log(response.data);
    }).catch(function(error) {
      console.log(error);
    });
  }

  formValidations(form) {
    console.log("form", form)
    if (form.password !== form.confirmPassword) {
      console.log("no match")
      this.state.formValidate.passwordValid = true
    }else{
      this.state.formValidate.passwordValid = false

    }

    this.forceUpdate()


  }

  render() {
    return (
      <div>
        <h3>Sign-up</h3>
        <Form className="signup-container" onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <FormGroup>
              <Label for="name">Name</Label>{' '}
              <Input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)}/>
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="phone">Phone</Label>{' '}
              <Input type="tel" name="phone" placeholder="Phone" value={this.state.formValues["phone"]} onChange={this.handleChange.bind(this)}/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>{' '}
              <Input type="email" name="email" placeholder="E-mail" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="password">Password</Label>{' '}
              <Input type="password" name="password" placeholder="Password" value={this.state.formValues["password"]} onChange={this.handleChange.bind(this)}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Confirm Password</Label>{' '}
              <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.formValues["confirmPassword"]} onChange={this.handleChange.bind(this)}/>
              {this.state.formValidate.passwordValid
                ?  <Alert color="danger">
                  Passwords do not match.
                </Alert>
                :null}
            </FormGroup>

            <FormGroup>
              <Label for="selectOption">I want to be</Label>
              <Input type="select" name="selectOption" id="selectOption" value={this.state.formValues["type"]} onChange={this.handleChange.bind(this)}>
                <option value="">Mentee</option>
                <option value="">Mentor</option>
                <option value="">Both</option>
              </Input>
            </FormGroup>
            <Button>Submit</Button>
            {' '}
          </div>
        </Form>

      </div>

    )
  }
}
