import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
import Title from './Title';
import SignFormContainer from './SignFormContainer';
import About from './About';
import Contact from './Contact';
// import {Header} from "./Header";
import MenteeInfo from '../Home/MenteeInfo';
import MentorInfo from '../Home/MentorInfo';


export default class Home extends Component {
  render() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/profile');
    }

    return (
      <div>
        <div id="title"><Title /></div>
        <div id="signin"><SignFormContainer /></div>
        <div id="menteeInfo"><MenteeInfo /></div>
        <div id="mentorInfo"><MentorInfo /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
      </div>
    );
  }
}
