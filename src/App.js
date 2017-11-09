import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';

import HomeContainer from './components/Home/HomeContainer';
import UserContainer from './components/UserScreen/UserContainer';
import GoalsContainer from './components/GoalsScreen/GoalsContainer';
import PersonalityFormContainer from './components/PersonalityFormScreen/PersonalityFormContainer';
import AccountContainer from './components/AccountScreen/AccountContainer';
import ScheduleContainer from './components/ScheduleScreen/ScheduleContainer';
import ReviewsContainer from './components/ReviewsScreen/ReviewsContainer';
import EventsContainer from './components/EventsScreen/EventsContainer';
import EducationContainer from './components/EducationScreen/EducationContainer';
import BackgroundContainer from './components/BackgroundScreen/BackgroundContainer';
import CommLogContainer from './components/CommLogScreen/CommLogContainer';

import Contact from './components/Home/Contact';

const SCREENS = [
  {
    title: 'Home', route: '/home', component: UserContainer, mainMenu: true,
  },
  {
    title: 'My Profile', route: '/profile', component: AccountContainer, mainMenu: true,
  },
  {
    title: 'Goals', route: '/goals', component: GoalsContainer, mainMenu: true,
  },
  {
    title: 'Schedule', route: '/schedule', component: ScheduleContainer, mainMenu: true,
  },
  {
    title: 'Reviews', route: '/reviews', component: ReviewsContainer, mainMenu: true,
  },
  {
    title: 'Community Log', route: '/commlog', component: CommLogContainer, mainMenu: true,
  },
  {
    title: 'News & Events', route: '/events', component: EventsContainer, mainMenu: true,
  },
  {
    title: 'Education & Training', route: '/education', component: EducationContainer, mainMenu: true,
  },
  {
    title: 'Background Checks', route: '/background', component: BackgroundContainer, mainMenu: true,
  },
  {
    title: 'Personality Form', route: '/form', component: PersonalityFormContainer, mainMenu: true,
  },
  {
    title: 'Contact', route: '/contact', component: Contact, mainMenu: true,
  },
];

export default class App extends Component {
  checkAuth(ComponentToRender) {
    console.log('props', this.props);
    return props => (this.props.isLoggedIn ? <ComponentToRender {...props} /> :
      (<Redirect to={{
                pathname: '/',
                state: { from: props.location },
            }}
      />));
  }

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

  renderRoutes() {
    return (
      <div>
        {SCREENS.map(screen => (
          <Route
            path={screen.route}
            key={screen.route}
            exact
            render={this.checkAuth(screen.component)}
          />
        ))}
      </div>
    );
  }

  renderNav() {
    return (
      <div id={this.props.isLoggedIn ? 'member_sidebar' : 'documenter_sidebar'}>
        <a href="#title"><img alt="" className="logo" src={`${process.env.PUBLIC_URL}/image/CustomMentorLogo.png`} /></a>
        {this.renderLinks()}
        <div className="socialLinks">
          <i onClick={this.facebook} className="fa fa-facebook-official" />
          <i onClick={this.twitter} className="fa fa-twitter-square" />
          <i onClick={this.linkedin} className="fa fa-linkedin-square" />
          <i onClick={this.youtube} className="fa fa-youtube-square" />
        </div>
      </div>
    );
  }

  renderLinks() {
    return this.props.isLoggedIn ? (
      <ul className="nav">
        {SCREENS
          .filter(item => item.mainMenu)
          .map(screen => (
            <li key={screen.title}>
              <NavLink to={screen.route} key={screen.title}>
                {screen.title}
              </NavLink>
            </li>
          ))}
      </ul>
    ) : (
      <ul className="nav" >
        <li><a href="#signin">Sign-In/Sign-Up</a></li>
        <li><a href="#menteeInfo">Need a Mentor?</a></li>
        <li><a href="#mentorInfo">Become a Mentor</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    );
  }

  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-xs-2">
            {this.renderNav()}
          </div>
          <div className="col-xs-10 home">
            <Route path="/" exact component={EventsContainer} />
            {this.renderRoutes()}
          </div>
        </div>
      </Router>
    );
  }
}
