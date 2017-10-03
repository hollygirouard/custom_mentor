import React, {Component} from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import {Root} from "./components/Home/Root";
import {Home} from "./components/Home/Home";
import HeaderContainer from './components/Home/HeaderContainer'
import MentorHeader from './components/Mentor/MentorHeader'
import {MentorHome} from "./components/Mentor/MentorHome";
import {MenteeHome} from "./components/Mentee/MenteeHome";
import SignForm from "./components/Home/SignForm"
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store';


const SCREENS = [
    {title: 'Mentor Home', route: '/mentor/home', component: MentorHome},
    {title: 'Mentee Home', route: '/mentee/home', component: MenteeHome}
]


export default class App extends Component {
    checkAuth(ComponentToRender) {
        return props => this.props.isLoggedIn ? <ComponentToRender {...props} /> : <Redirect to={'/'} /> 
    };
    
    renderRoutes() {
        console.log(this.props)
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

    render() {
        console.log("render function pre")
        return (
            <Router>
                <div className="row">
                    <div className="col-xs-2">
                        <HeaderContainer />
                    </div>
                    <div className="col-xs-10 home">
                        <Route path='/' exact component={Home} />
                        {this.renderRoutes()}
                    </div>
                </div>
            </Router>
        );
    }
}