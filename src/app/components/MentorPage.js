import React, {Component} from "react";
import { browserHistory } from "react-router";

import {MemberHeader} from "./MemberHeader";


export class MentorPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-2">
                    <MemberHeader/>
                </div>
                <div className="col-xs-10">
                  <h3>The Mentor Page</h3>
                </div>
        </div>
        );
    }
}
