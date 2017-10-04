import React, {Component} from "react";
import axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from 'reactstrap';

export class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {
        type: "Mentee"
      },
      formValidate: {}
    }
  }

    handleChange(event) {
      event.preventDefault();
      let formValues = this.state.formValues;
      let name = event.target.name;
      let value = event.target.value;

      formValues[name] = value;

      this.setState({formValues})
      this.formValidations(formValues)
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onSignUp(this.state.formValues);
      this.formValidations(this.state.formValues);
      console.log("form into SQL", this.state.formValues);
      let form = this.state.formValues;
      form.name&&form.email&&form.phone&&form.password&&form.password===form.confirmPassword ? this.postLogin(form):null;

    }

    formValidations(form) {
      form.name ? this.state.formValidate.nameInvalid = false : this.state.formValidate.nameInvalid =true;
      form.email ? this.state.formValidate.emailInvalid = false :this.state.formValidate.emailInvalid =true;
      form.phone ? this.state.formValidate.phoneInvalid = false :this.state.formValidate.phoneInvalid =true;
      form.password ? this.state.formValidate.passwordInvalid = false :this.state.formValidate.passwordInvalid =true;
      form.password !== form.confirmPassword ? this.state.formValidate.passwordMatch = true:this.state.formValidate.passwordMatch = false;
      this.forceUpdate()
    }

    postLogin(form){
      //send data to API
      console.log("sending data")
      axios({
        method: 'POST',
        url: 'custom_mentor/serverapi/user.php',
        data: "requesttype=Signup&data=" + (JSON.stringify(form))
      }).then(function(response) {
        //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
        console.log(response.data);
      }).catch(function(error) {
        console.log(error);
      });
    }

    render() {
      return (
        <div>
          <h3>Sign-up</h3>
          <Form className="signup-container" onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <FormGroup color={this.state.formValidate.nameInvalid ? "error":"null"}>
                <Label for="name">Name</Label>{' '}
                <Input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)}/>
                {this.state.formValidate.nameInvalid
                  ? <p className ="error">Please input name.</p>

                  : null}
              </FormGroup>
              {' '}
              <FormGroup color={this.state.formValidate.phoneInvalid ? "error":"null"}>
                <Label for="phone">Phone</Label>{' '}
                <Input type="tel" name="phone" placeholder="Phone" value={this.state.formValues["phone"]} onChange={this.handleChange.bind(this)}/>
                {this.state.formValidate.phoneInvalid
                  ? <p className ="error">Please input phone number.</p>

                  : null}
              </FormGroup>
              <FormGroup color={this.state.formValidate.emailInvalid ? "error":"null"}>
                <Label for="email">Email</Label>{' '}
                <Input type="email" name="email" placeholder="E-mail" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
                {this.state.formValidate.emailInvalid
                  ? <p className ="error">Please input E-mail.</p>

                  : null}
              </FormGroup>
            </div>
            <div>
              <FormGroup color={this.state.formValidate.passwordInvalid ? "error":"null"}>
                <Label for="password">Password</Label>{' '}
                <Input type="password" name="password" placeholder="Password" value={this.state.formValues["password"]} onChange={this.handleChange.bind(this)}/>
                {this.state.formValidate.passwordInvalid
                  ?
                      <p className ="error">Please input password</p>

                  : null}
              </FormGroup>
              <FormGroup color={this.state.formValidate.passwordMatch ? "error":"null"}>
                <Label for="password">Confirm Password</Label>{' '}
                <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.formValues["confirmPassword"]} onChange={this.handleChange.bind(this)}/>
                {this.state.formValidate.passwordMatch
                  ? <p className ="error">Passwords don't match.</p>

                  : null}

              </FormGroup>

              <FormGroup>
                <Label for="selectOption">I want to be</Label>
                <Input type="select" name="type" id="selectOption" value={this.state.formValues["type"]} onChange={this.handleChange.bind(this)}>
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

      )
    }
  }
