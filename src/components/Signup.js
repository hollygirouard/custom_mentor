import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {}
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
    this.props.onSignUp(this.state.formValues)

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
                    <Input type="tel" name="phone" placeholder="Phone" value={this.state.formValues["phone"]} onChange={this.handleChange.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>{' '}
                    <Input type="email" name="email" placeholder="E-mail" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)} />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                    <Label for="password">Password</Label>{' '}
                    <Input type="password" name="password" placeholder="Password" value={this.state.formValues["password"]} onChange={this.handleChange.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Confirm Password</Label>{' '}
                    <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.formValues["confirmPassword"]} onChange={this.handleChange.bind(this)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="selectOption">I want to be</Label>
                    <Input type="select" name="selectOption" id="selectOption">
                      <option value="">Mentee</option>
                      <option value="">Mentor</option>
                      <option value="">Both</option>
                    </Input>
                </FormGroup>
                {' '}
              </div>
            </Form>

              <Button>Submit</Button>
      </div>

    )
  }
}
