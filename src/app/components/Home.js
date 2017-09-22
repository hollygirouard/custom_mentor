import React, {Component} from "react";

import {SignForm} from "./SignForm";
import {About} from "./About";
import {Contact} from "./Contact";
import {Header} from "./Header";

export class Home extends Component {
    render() {
        return (
              <div className="row">
                  <div className="col-xs-2">
                      <Header/>
                  </div>
                  <div className="col-xs-10">
                      <div id ="signin"><SignForm /></div>
                      <div id ="about"><About /></div>
                      <div id ="contact"><Contact /></div>
                  </div>
          </div>
        );
    }
}
