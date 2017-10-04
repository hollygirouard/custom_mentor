import React, {Component} from "react";

import {Title} from "./Title";
import SignFormContainer from "./SignFormContainer";
import {About} from "./About";
import Contact from "./Contact";
// import {Header} from "./Header";
import {MenteeInfo} from "../Mentee/MenteeInfo";
import {MentorInfo} from "../Mentor/MentorInfo";



export default class Home extends Component {

    render() {
        return (
              <div>
                      <div id ="title"><Title /></div>
                      <div id ="signin"><SignFormContainer pushLocation={this.props.history.push} /></div>
                      <div id ="menteeInfo"><MenteeInfo /></div>
                      <div id ="mentorInfo"><MentorInfo /></div>
                      <div id ="about"><About /></div>
                      <div id ="contact"><Contact /></div>
                </div>
        );
    }
}


