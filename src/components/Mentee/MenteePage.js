import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {MenteeRoot} from "./MenteeRoot";
import {MenteeHome} from "./MenteeHome";
import {MenteeForm} from "./MenteeForm";


export class MenteePage extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/mentee"} component={MenteeRoot} >
                    <IndexRoute component={MenteeHome} />
                    <Route path={"/mentee/home"} component={MenteeHome} />
                    <Route path={"/mentee/form"} component={MenteeForm} />
                </Route>
                <Route path={"home-single"} component={MenteeHome}/>
            </Router>
        );
    }
}
