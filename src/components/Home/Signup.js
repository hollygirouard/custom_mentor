import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        type: 'Mentee',
      },
      formValidate: {
        nameInvalid: null,
        emailInvalid: null,
        phoneInvalid: null,
        passwordInvalid: null,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  /* eslint-disable no-unused-expressions */
  handleSubmit(event) {
    event.preventDefault();
    const form = this.state.formValues;
    if (form.name &&
        form.email &&
        form.phone &&
        form.password &&
        form.password === form.confirmPassword) {
      this.props.onSignUp(this.state.formValues);
    }
    this.formValidations(this.state.formValues);
  }

  formValidations(form) {
    const { formValidate } = this.state;
    form.name ? formValidate.nameInvalid = false :
      formValidate.nameInvalid = true;
    form.email ? formValidate.emailInvalid = false :
      formValidate.emailInvalid = true;
    form.phone ? formValidate.phoneInvalid = false :
      formValidate.phoneInvalid = true;
    form.password ? formValidate.passwordInvalid = false :
      formValidate.passwordInvalid = true;
    form.password !== form.confirmPassword ? formValidate.passwordMatch = true :
      formValidate.passwordMatch = false;
    this.setState({ formValidate });
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h3>Sign-up</h3>
        <Form className="signup-container" onSubmit={this.handleSubmit}>
          <div>
            <FormGroup color={this.state.formValidate.nameInvalid ? 'error' : 'null'}>
              <Label for="name">Name</Label>{' '}
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.formValues.name || ''}
                onChange={this.handleChange}
              />
              {this.state.formValidate.nameInvalid
                  ? <p className="error">Please input name.</p>

                  : null}
            </FormGroup>
            {' '}
            <FormGroup color={this.state.formValidate.phoneInvalid ? 'error' : 'null'}>
              <Label for="phone">Phone</Label>{' '}
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={this.state.formValues.phone || ''}
                onChange={this.handleChange}
              />
              {this.state.formValidate.phoneInvalid
                  ? <p className="error">Please input phone number.</p>

                  : null}
            </FormGroup>
            <FormGroup color={this.state.formValidate.emailInvalid ? 'error' : 'null'}>
              <Label for="email">Email</Label>{' '}
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.formValues.email || ''}
                onChange={this.handleChange}
              />
              {this.state.formValidate.emailInvalid
                  ? <p className="error">Please input E-mail.</p>

                  : null}
            </FormGroup>
          </div>
          <div>
            <FormGroup color={this.state.formValidate.passwordInvalid ? 'error' : 'null'}>
              <Label for="password">Password</Label>{' '}
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
            <FormGroup color={this.state.formValidate.passwordMatch ? 'error' : 'null'}>
              <Label for="password">Confirm Password</Label>{' '}
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={this.state.formValues.confirmPassword || ''}
                onChange={this.handleChange}
              />
              {this.state.formValidate.passwordMatch
                  ? <p className="error">Passwords don&#39;t match.</p>

                  : null}

            </FormGroup>

            <FormGroup>
              <Label for="selectOption">I want to be</Label>
              <Input
                type="select"
                name="type"
                id="selectOption"
                value={this.state.formValues.type}
                onChange={this.handleChange}
              >
                <option value="Mentee">Mentee</option>
                <option value="Mentor">Mentor</option>
                <option value="Both">Both</option>
              </Input>
            </FormGroup>
            <button type="submit" className="light-form-button">Sign Up</button>
            {this.props.errorMessage
                ? <p className="error">{this.props.errorMessage}</p>

                : null}
            {' '}
          </div>
        </Form>
      </div>
    );
  }
}
