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

  renderRoutes() {
        return (
            <div>
                {
                    SCREENS.map(screen => (
                        <Route path={screen.route} key={screen.route} exact
                                render={this.checkAuth(screen.component)} />
                    ))
                }
            </div>
        );
    }

    renderNav() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" id={ this.props.isLoggedIn ? "member_sidebar" : "documenter_sidebar" }>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">
                        <img  alt = "CustomMentor" className="logo" src={process.env.PUBLIC_URL + '/image/CustomMentorLogo.png'}/>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href ="#signin">Sign-In/Sign-Up</a></li>
                            <li><a href ="#menteeInfo">Find a Mentor</a></li>
                            <li><a href ="#mentorInfo">Become a Mentor</a></li>
                            <li><a href ="#about">About</a></li>
                            <li><a href ="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    renderFooter() {
        return(
            <footer id="footer" className="footer">
            <div className="container text-center">        
              <ul className="social-links">
                <li><a href="#" onClick={this.facebook}><i className="fa fa-facebook fa-fw"></i></a></li>
                <li><a href="#" onClick={this.twitter}><i className="fa fa-twitter fa-fw"></i></a></li>
                <li><a href="#" onClick={this.linkedin}><i className="fa fa-linkedin fa-fw"></i></a></li>
                <li><a href="#" onClick={this.youtube}><i className="fa fa-youtube fa-fw"></i></a></li>
              </ul>
              ©2017 CustomMentor.com | All rights reserved
              <div className="credits">
                  {/* All the links in the footer should remain intact.
                  You can delete the links only if you purchased the pro version.
                  Licensing information: https://bootstrapmade.com/license/
                  Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Mentor */}
                Designed by <a href="https://bootstrapmade.com/" target="blank">BootstrapMade.com</a>
              </div>
            </div>
          </footer>
        )
    }

    renderLinks() {
        return this.props.isLoggedIn ? (
            <ul className="nav">
                {
                    SCREENS
                        .filter(item => item.mainMenu)
                        .map(screen => (
                            <li key={screen.title}><NavLink to={screen.route} key={screen.title}>{screen.title}</NavLink></li>
                        ))
                }
            </ul>
        ) : (
            <ul className="nav" >
            </ul>
        )
    }

    render() {
        return (
            <Router>
                <div>
                    {this.renderNav()}
                    {<div className="home">
                        <Route path='/' exact component={HomeContainer} />
                        {this.renderFooter()}
                    </div>}
                    {this.renderRoutes()}
                </div>
            </Router>
        );
    }

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
