import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
      formValidate: {},
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
    this.props.onSignIn(this.state.formValues);
    this.formValidations(this.state.formValues);

    //  axios({
    //     method: 'POST',
    //     url: '/custommentor/custom_mentor/serverapi/user.php',
    //     data: "requesttype=Signin&data=" + (JSON.stringify(this.state.formValues))
    //   }).then(function (response) {
    //     //sample response :{
    // "response":"failed",
    // "error":"Your email has been registered. Please pick another email.",
    // type:""}
    //     //sample response :{
    // "response":"success",
    // "error":"",
    // type:"Mentee"} :redirect to signin based on response
    //     console.log(response.data);
    //   }).catch(function (error) {
    //     console.log(error);
    //   });
  }
  /* eslint-disable */
  formValidations(form) {
    form.email ? this.state.formValidate.emailInvalid = false : this.state.formValidate.emailInvalid = true;
    form.password ? this.state.formValidate.passwordInvalid = false : this.state.formValidate.passwordInvalid = true;
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
              value={this.state.formValues.email}
              onChange={this.handleChange}
            />
            {this.state.formValidate.emailInvalid
                      ? <p className="error">Please input E-mail.</p>

            <Label for="examplePassword">Password</Label>{' '}
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
          {' '}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
