import React, {Component} from "react";

import {MentorHeader} from "./MentorHeader";

export class MentorRoot extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-2">
                        <MentorHeader />
                    </div>
                    <div className="col-xs-10">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
