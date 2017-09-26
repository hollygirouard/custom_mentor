import React, {Component} from "react";

import {MenteeHeader} from "./MenteeHeader";

export class MenteeRoot extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-2">
                        <MenteeHeader />
                    </div>
                    <div className="col-xs-10">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
