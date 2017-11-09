import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
      formValidate: {
        email: false,
        password: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { formValues } = this.state;
    const { name } = event.target;
    const { value } = event.target;
    formValues[name] = value;
    this.setState({ formValues });
    this.formValidations(formValues);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { formValues } = this.state;
    this.props.onSignIn(formValues);
    // this.formValidations(this.state.formValues);
  }
  /* eslint-disable */
  formValidations(form) {
    const { formValidate } = this.state
    const emailValid = form.email ? false : true;
    const passwordValid = form.password ? false : true;
    formValidate.email= emailValid
    formValidate.password = passwordValid
    this.setState({ formValidate })   
    this.forceUpdate();
  }

  emailPass(response) {
    response.data.response === 'failed' ? this.state.formValidate.emailPass = true : this.state.formValidate.emailPass = false;
    this.forceUpdate();
  }
  /* eslint-enable */

  render() {
    return (
      <div>
        <h3>Sign-in</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup color={this.state.formValidate.emailInvalid ? 'error' : 'null'}>
            <Label for="exampleEmail">Email</Label>{' '}
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={this.state.formValues.email || ''}
              onChange={this.handleChange}
            />
            {this.state.formValidate.emailInvalid
                      ? <p className="error">Please input E-mail.</p>

                      : null}
            {this.state.formValidate.emailPass
                        ? <p className="error">E-mail and password do not match.</p>

                        : null}
            <Label for="examplePassword">Password</Label>{' '}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.formValues.password || ''}
              onChange={this.handleChange}
            />
            {this.state.formValidate.passwordInvalid
                      ?
                        <p className="error">Please input password</p>

                      : null}
          </FormGroup>
          {' '}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
