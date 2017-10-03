import React, {Component} from "react";
import { NavLink, BrowserRouter as Link } from 'react-router-dom'

export default class Header extends Component {

  renderNav() {
    return !this.props.isLoggedIn ? (
      <ul className="nav" >
        <li><a href ="#signin">Sign-In/Sign-Up</a></li>
        <li><a href ="#menteeInfo">Need a Mentor?</a></li>
        <li><a href ="#mentorInfo">Become a Mentor</a></li>
        <li><a href ="#about">About</a></li>
        <li><a href ="#contact">Contact</a></li>
      </ul>
    ) : (
      <ul  className="nav" >
        <li><NavLink to={"/mentor/home"} key="home">Home</NavLink></li>
        <li><NavLink to={"/mentor/form"} key="form">Personality Form</NavLink></li>
        <li><a href ="#signin"> Account</a></li>
        <li><a href ="#about"> Activities</a></li>
        <li><a href ="#schedule"> Schedule</a></li>
        <li><a href ="#contact"> Contact</a></li>
      </ul>
    )
  }

  render() {
    return (
      <div id={ !this.props.isLoggedIn ? "documenter_sidebar" : "member_sidebar" }>
        <a href ="#title"><img  alt = "" className="logo" src={process.env.PUBLIC_URL + '/image/CustomMentorLogo.png'}/></a>
        {this.renderNav()}
        <div className="socialLinks">
          <i onClick={this.facebook} className="fa fa-facebook-official"></i>
          <i onClick={this.twitter} className="fa fa-twitter-square"></i>
          <i onClick={this.linkedin} className="fa fa-linkedin-square"></i>
          <i onClick={this.youtube} className="fa fa-youtube-square"></i>
        </div>
      </div>
    );
  };

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
}
