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
          <div className="col-xs-3">
            <Header/>
          </div>
          <div className="col-xs-7">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
