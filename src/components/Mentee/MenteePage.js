import React, {Component} from "react";

import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {MenteeRoot} from "./MenteeRoot";
import {MenteeHome} from "./MenteeHome";
import {MenteeForm} from "./MenteeForm";


export class MenteePage extends Component {
    render() {
        return (
          <div>
            <Router history={browserHistory}>
                <Route path={"/mentee/"} component={MenteeRoot} >
                    <IndexRoute component={MenteeHome} />
                    <Route path={"home"} component={MenteeHome} />
                    <Route path={"form"} component={MenteeForm} />
                </Route>
                <Route path={"home-single"} component={MenteeHome}/>
            </Router>
          </div>

        );
    }
}
