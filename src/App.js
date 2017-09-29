import React, {Component} from "react";
// import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {Root} from "./components/Home/Root";
import {Home} from "./components/Home/Home";
import {MentorPage} from "./components/Mentor/MentorPage";
import {MenteePage} from "./components/Mentee/MenteePage";
import SignForm from "./components/Home/SignForm"
import EnsureLoggedInContainer from './components/EnsureLoggedInContainer'

const SCREENS = [
    {title: 'Mentor Home', route: '/mentor/home', component: MentorPage},
    {title: 'Mentee Home', route: '/mentee/home', component: MenteePage},
    {title: 'Mentor form', route: '/mentor/form', component: MenteePage},
    {title: 'Mentee Form', route: '/mentee/form', component: MentorPage}
]


export default class App extends Component {
  toRoute(page){
    console.log("route", page);
  }

    requireAuth(nextState, replace) {
        console.log(this.props)
        if (!this.props.isLoggedIn) {
          replace('/')
        }
    }
    
    renderRoutes() {
        console.log(this.props)
        return (
            <div>
                {
                    SCREENS.map(screen => (
                        <Route path={screen.route} key={screen.route}
                                component={screen.component} onEnter={this.requireAuth.bind(this)} />
                    ))
                }
            </div>
        );
    }

    render() {
        return (
          <Router history = {browserHistory}>
            <Route path={"/"} component={Root} >
                <IndexRoute component={Home} />
                    {this.renderRoutes()}
            </Route>
          </Router>
        );
    }
}




// component={screen.component} onEnter={this.requireAuth.bind(this)}