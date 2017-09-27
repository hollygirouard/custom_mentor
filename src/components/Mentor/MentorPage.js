import React, {Component} from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {MentorRoot} from "./MentorRoot";
import {MentorHome} from "./MentorHome";
import {MentorForm} from "./MentorForm";


export class MentorPage extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/mentor"} component={MentorRoot} >
                    <IndexRoute component={MentorHome} />
                    <Route path={"/mentor/home"} component={MentorHome} />
                    <Route path={"/mentor/form"} component={MentorForm} />
                </Route>
                <Route path={"home-single"} component={MentorHome}/>
            </Router>
        );
    }
}
