import React, {Component} from "react";

import {Header} from "./Header";

export class Root extends Component {
  facebook() {
    window.open("https://www.facebook.com/blossomcarenetwork.org");
  }
  twitter() {
    window.open("https://twitter.com/BlossomCareCO");
  }
  linkedin() {
    window.open("https://www.linkedin.com/company/3800360/");
  }
  youtube() {
    window.open("https://www.youtube.com/channel/UCA1mpGozH327Ca2NfSSYUEQ");
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-2">
            <img className = "logo" src = "../image/CustomMentorLogo.png"/>
            <Header/>
            {/* <div className ="socialLinks">
              <i onClick={this.facebook} className="fa fa-facebook-official"></i>
              <i onClick={this.twitter} className="fa fa-twitter-square"></i>
              <i onClick={this.linkedin} className="fa fa-linkedin-square"></i>
              <i onClick={this.youtube} className="fa fa-youtube-square"></i>
            </div> */}
          </div>
          <div className="col-xs-10 ">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
