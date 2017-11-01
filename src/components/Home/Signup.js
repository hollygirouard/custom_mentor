import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
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
      formValidate: {},
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
    this.props.onSignUp(this.state.formValues);
    this.formValidations(this.state.formValues);
    const form = this.state.formValues;
    form.name &&
    form.email &&
    form.phone &&
    form.password &&
    form.password === form.confirmPassword ?
      this.postLogin(form) : null;
  }

  formValidations(form) {
    form.name ? this.state.formValidate.nameInvalid = false :
      this.state.formValidate.nameInvalid = true;
    form.email ? this.state.formValidate.emailInvalid = false :
      this.state.formValidate.emailInvalid = true;
    form.phone ? this.state.formValidate.phoneInvalid = false :
      this.state.formValidate.phoneInvalid = true;
    form.password ? this.state.formValidate.passwordInvalid = false :
      this.state.formValidate.passwordInvalid = true;
    form.password !== form.confirmPassword ? this.state.formValidate.passwordMatch = true :
      this.state.formValidate.passwordMatch = false;
    this.forceUpdate();
  }

  /* eslint-disable */
  postLogin(form) {
    // send data to API
    axios({
      method: 'POST',
      // AWS Config
      url: '/serverapi/user.php',
      // Development Config
      // url: 'http://localhost/custom_mentor/serverapi/user.php',
      data: `requesttype=Signup&data=${JSON.stringify(form)}`,
    }).then((response) => {
      // sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  /* eslint-enable */

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
                value={this.state.formValues.name}
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
                value={this.state.formValues.phone}
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
                placeholder="E-ail"
                value={this.state.formValues.mail}
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
                value={this.state.formValues.password}
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
                value={this.state.formValues.confirmPassword}
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
            <Button>Submit</Button>
            {' '}
          </div>
        </Form>
      </div>
    );
  }
}
