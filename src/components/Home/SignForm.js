import React, {Component} from "react";
import { Button, ButtonGroup } from 'reactstrap'

import {Signup} from "./Signup";
import {Signin} from "./Signin";



export default class SignForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: true,
      signinVisible: false
    }
    console.log(this.props)
  }

  signIn = (userInfo) => {
    this.props.authenticateUser(userInfo)
    this.props.pushLocation('/mentor/home')
  }

  signUp(member){
    console.log("signUp", member);
  }

  render() {
    return(
      <div className="sign-form">
        <div className="button-sign-form">
        <ButtonGroup>
          <Button active={this.state.loginVisible} color="primary" onClick={() => this.onLogin()}>Sign-in</Button>
          <Button active={this.state.signinVisible} color="primary" onClick={() => this.onSignin()}>Sign-up</Button>
        </ButtonGroup>
      </div>

        {this.state.loginVisible
            ? <Signin onSignIn = {member => this.signIn(member)} />
            : null
        }
        {this.state.signinVisible
            ? <Signup onSignUp = {member => this.signUp(member)}  />
            : null
        }
      </div>

    )
  }

  onLogin() {
      this.setState({loginVisible: true, signinVisible:false});
  }
  onSignin() {
      this.setState({loginVisible: false, signinVisible:true});
  }
};
