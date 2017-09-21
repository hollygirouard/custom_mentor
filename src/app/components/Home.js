import React, {Component} from "react";

import {Login} from "./Login";
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
        <button onClick={() => this.onLogin()}>Login</button>
        <button onClick={() => this.onSignin()}>Sign-in</button>

        {this.state.loginVisible
            ? <Login />
            : null
        }
        {this.state.signinVisible
            ? <Signin />
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
