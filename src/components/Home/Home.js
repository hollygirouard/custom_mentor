import React, { Component } from 'react';
import Title from './Title';
import SignForm from './SignForm';
import About from './About';
import Contact from './Contact';
import MenteeInfo from '../Home/MenteeInfo';
import MentorInfo from '../Home/MentorInfo';


export default class Home extends Component {
  componentWillUpdate(newProps) {
    if (newProps.isLoggedIn) {
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <div>
        <div id="title"><Title /></div>
        <div id="signin">
          <SignForm
            authenticateUser={this.props.authenticateUser}
            createNewUser={this.props.createNewUser}
            newUserMessage={this.props.newUserMessage}
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
