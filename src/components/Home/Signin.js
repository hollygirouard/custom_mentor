import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
      formValidate: {},

    };
  }
  handleChange(event) {
    event.preventDefault();
    const formValues = this.state.formValues;
    const name = event.target.name;
    const value = event.target.value;
    formValues[name] = value;
    this.setState({ formValues });
    this.formValidations(formValues);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignIn(this.state.formValues);
    this.formValidations(this.state.formValues);
  }

  formValidations(form) {
    form.email ? this.state.formValidate.emailInvalid = false : this.state.formValidate.emailInvalid = true;
    form.password ? this.state.formValidate.passwordInvalid = false : this.state.formValidate.passwordInvalid = true;
    this.forceUpdate();
  }

  emailPass(response) {
    response.data.response === 'failed' ? this.state.formValidate.emailPass = true : this.state.formValidate.emailPass = false;
    this.forceUpdate();
  }

        render(){
        return (


            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup color={this.state.formValidate.emailInvalid ? "error":"null"}>
                    <Label for="exampleEmail">Email</Label>{' '}
                    <Input type="email" name="email" placeholder="E-mail" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)} />
                    {this.state.formValidate.emailInvalid
                        ? <p className ="error">Please input E-mail.</p>

                        : null}
                        {this.state.formValidate.emailPass
                        ? <p className ="error">E-mail and password do not match.</p>

                        : null}
                </FormGroup>
                {' '}
                <FormGroup color={this.state.formValidate.passwordInvalid ? "error":"null"}>

                    <Label for="examplePassword">Password</Label>{' '}
                    <Input type="password" name="password" placeholder="Password" value={this.state.formValues["password"]} onChange={this.handleChange.bind(this)} />
                    {this.state.formValidate.passwordInvalid
                        ?
                            <p className ="error">Please input password</p>

                        : null}
                </FormGroup>
                {' '}
                    <button type="submit" className="light-form-button">Sign In</button>
                </Form>
            </div>

    );
  }
}


