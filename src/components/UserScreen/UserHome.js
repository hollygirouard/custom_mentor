import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class UserHome extends Component {
  render() {
    const user = this.props.currentUser.data.user_details;

    return (
      <div className="screen">
        <h1>User Home Screen</h1>
        <h3>{user.name}</h3>
        <h4>{user.type}</h4>
        <Button color="primary" onClick={() => this.props.userSignOut()}>Sign out</Button>
      </div>
    );
  }
}
