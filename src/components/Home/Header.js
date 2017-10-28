import React, { Component } from 'react';
import { NavLink, BrowserRouter as Link } from 'react-router-dom';

export default class Header extends Component {
  facebook() {
    window.open('https://www.facebook.com/blossomcarenetwork.org');
  }
  twitter() {
    window.open('https://twitter.com/BlossomCareCO');
  }
  linkedin() {
    window.open('https://www.linkedin.com/company/3800360/');
  }
  youtube() {
    window.open('https://www.youtube.com/channel/UCA1mpGozH327Ca2NfSSYUEQ');
  }

  render() {
    return (
      <div id="documenter_sidebar">
        <a href="#title"><img alt="" className="logo" src={`${process.env.PUBLIC_URL}/image/CustomMentorLogo.png`} /></a>
        <ul className="nav" >
          <li><a href="#signin">Sign-In/Sign-Up</a></li>
          <li><a href="#menteeInfo">Need a Mentor?</a></li>
          <li><a href="#mentorInfo">Become a Mentor</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="socialLinks">
          <i onClick={this.facebook} className="fa fa-facebook-official" />
          <i onClick={this.twitter} className="fa fa-twitter-square" />
          <i onClick={this.linkedin} className="fa fa-linkedin-square" />
          <i onClick={this.youtube} className="fa fa-youtube-square" />
        </div>
      </div>
    );
  }
}
