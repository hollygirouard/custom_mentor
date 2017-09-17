import React, {Component} from "react";
import { browserHistory } from "react-router";

export class About extends Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div>
                <h3>About</h3>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Home</button>
            </div>
        );
    }
}
