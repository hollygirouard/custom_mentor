import React, {Component} from "react";

export default class Account extends Component {
    render() {
        let user = this.props.currentUser
        return (
            <div>
                <h1>Account Screen</h1>
                <h3>{user.name}</h3>
                <h4>{user.type}</h4>
            </div>
        );
    }
}
