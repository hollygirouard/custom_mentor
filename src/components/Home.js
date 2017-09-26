import React, {Component} from "react";

import {Title} from "./Title";
import {SignForm} from "./SignForm";
import {About} from "./About";
import {Contact} from "./Contact";
import {Header} from "./Header";

export class Home extends Component {
      toPage(page){
        console.log("page", page);
        console.log("route", this.props.route)
      }
    render() {
        return (
          
              <div className="row">
                  <div className="col-xs-2">
                      <Header/>
                  </div>
                  <div className="col-xs-10">
                      <div id ="title"><Title /></div>
                      <div id ="signin"><SignForm onPageType = {page => this.toPage(page)} /></div>
                      <div id ="about"><About /></div>
                      <div id ="contact"><Contact /></div>
                  </div>
                </div>

        );
    }
}
