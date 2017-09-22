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

  render() {
    return(
      <div>
        <button onClick={() => this.onLogin()}>Sign-in</button>
        <button onClick={() => this.onSignin()}>Sign-up</button>

        {this.state.loginVisible
            ? <Signin />
            : null
        }
        {this.state.signinVisible
            ? <Signup />
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
