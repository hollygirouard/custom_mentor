import React, {Component} from "react";
import { browserHistory } from "react-router";

export class User extends Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}
