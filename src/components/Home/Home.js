import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
import Title from './Title';
import SignForm from './SignForm';
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
        <div id="signin">
          <SignForm 
            authenticateUser={this.props.authenticateUser}
            createNewUser={this.props.createNewUser}
          />
        </div>
        <div id="menteeInfo"><MenteeInfo /></div>
        <div id="mentorInfo"><MentorInfo /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
      </div>
    );
  }
}
