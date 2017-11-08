import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import Signup from './Signup';
import Signin from './Signin';

export default class SignForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: true,
      signinVisible: false,
    };
  }

  onLogin() {
    this.setState({ loginVisible: true, signinVisible: false });
  }

  onSignin() {
    this.setState({ loginVisible: false, signinVisible: true });
  }

  signIn = (userInfo) => {
    this.props.authenticateUser(userInfo)
  }

  signUp = (newUserInfo) => {
    this.props.createNewUser(newUserInfo)
  }

  render() {
    return(
      <div className="section-padding">
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="header-section text-center">
                      <h2>Sign-in</h2>
                    </div>
                  <div className="text-center">
                      <ButtonGroup>
                        <Button className="light-form-button" active={this.state.loginVisible} color="primary" onClick={() => this.onLogin()}>Sign-in</Button>
                        <Button className="light-form-button" active={this.state.signinVisible} color="primary" onClick={() => this.onSignin()}>Sign-up</Button>
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
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="row">
                          <div className="header-section text-center">
                            <h2>Set Your Pace</h2>
                            <p>Choose from four levels of mentoring:</p>
                            <hr className="bottom-line" />
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="service-box text-center">
                              <div className="icon-box">
                                <i className="fa fa-thumbs-o-up color-green"></i>
                              </div>
                              <div className="icon-text">
                                <h4 className="ser-text">Cheerleader</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                          <div className="service-box text-center">
                            <div className="icon-box">
                              <i className="fa fa-universal-access color-green"></i>
                            </div>
                            <div className="icon-text">
                              <h4 className="ser-text">Mentor</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="service-box text-center">
                              <div className="icon-box">
                                <i className="fa fa-space-shuttle color-green"></i>
                              </div>
                              <div className="icon-text">
                                <h4 className="ser-text">Coach</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="service-box text-center">
                              <div className="icon-box">
                                <i className="fa fa-trophy color-green"></i>
                              </div>
                              <div className="icon-text">
                                <h4 className="ser-text">Tutor</h4>
                              </div>
                            </div>
                          </div>
                    </div>
                  </div>

              </div>
          </div>
      </div>
    )
  }
}
