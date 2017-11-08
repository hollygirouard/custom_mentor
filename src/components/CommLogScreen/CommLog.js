import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import Details from './Details';


export default class CommLog extends Component {
  render() {
    const user = this.props.currentUser.data.user_details;
    return (
      <div>

        <h1>Communication Log</h1>
        <h3>{user.name}</h3>
        <h4>{user.type}</h4>
        <Details />
      </div>
    );
  }
}
