import React, {Component} from "react";
import { Redirect } from 'react-router';


import {Signup} from "./Signup";
import {Signin} from "./Signin";



export class SignForm extends Component {
  constructor() {
    super();
    this.state = {
      loginVisible: true,
      signinVisible:false
    }
  }

  signIn(member){
    console.log("signin", member);
    this.props.onPageType("mentor")
    if (member.email === "austintedwards@gmail.com"){
      window.location.pathname = "mentor";
    }else if (member.email === "jeff.diers@gmail.com"){
      window.location.pathname = "mentor";
    }

  }
  signUp(member){
    console.log("signUp", member);
  }

  render() {
    return(
      <div>
        <button onClick={() => this.onLogin()}>Sign-In</button>
        <button onClick={() => this.onSignin()}>Sign-Up</button>

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
