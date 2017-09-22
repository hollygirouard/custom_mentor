import React, {Component} from "react";

import {Signup} from "./Signup";
import {Signin} from "./Signin";



class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loginVisible: true,
      signinVisible:false
    }
  }

  signIn(member){
    console.log("signin", member);
  }
  signUp(member){
    console.log("signUp", member);
  }

  render() {
    return(
      <div>
        <button onClick={() => this.onLogin()}>Sign-in</button>
        <button onClick={() => this.onSignin()}>Sign-up</button>

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


export default Home
