import React, {Component} from "react";
import {Router, Route} from "react-router";

import {MentorRoot} from "./MentorRoot";
import {MentorHome} from "./MentorHome";
import {MentorForm} from "./MentorForm";


export class MentorPage extends Component {
    render() {
        return (
            <Router >
                <Route path={"/mentor/"} component={MentorRoot} >
                    <Route path={"home"} component={MentorHome} />
                    <Route path={"form"} component={MentorForm} />
                </Route>
                <Route path={"home-single"} component={MentorHome}/>
            </Router>
        );
    }
}
