import React, {Component} from "react";
import { Button, ButtonGroup } from 'reactstrap'

import Signup from "./Signup";
import Signin from "./Signin";

export default class SignForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: true,
      signinVisible: false
    }
  }

  signIn = (userInfo) => {
    this.props.authenticateUser(userInfo)

  }

  signUp(member){
    // console.log("signUp", member);
  }

  render() {
    return(
      <div className="row">
        <div class="col-2">
          <ButtonGroup>
            <Button className="form oswald light" active={this.state.loginVisible} color="primary" onClick={() => this.onLogin()}>Sign-in</Button>
            <Button className="form oswald light" active={this.state.signinVisible} color="primary" onClick={() => this.onSignin()}>Sign-up</Button>
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
