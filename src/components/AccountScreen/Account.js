import React, {Component} from "react";
import { Button } from 'reactstrap'

export default class Account extends Component {
    render() {
        let user = this.props.currentUser.data.user_details
        console.log(user)
        return (
          <div>
              <h1>Welcome, {user.name}</h1>
              <h4>{user.type}</h4>
              <Button color="primary" onClick={() => this.props.userSignOut()}>Sign out</Button>
          </div>
        );
    }
}
