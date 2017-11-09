import React, { Component } from 'react';
import Appointment from './Appointment';

export default class Schedule extends Component {
  render() {
    // const user = this.props.currentUser;
    return (
      <div className="screen">
        <h1>Schedule Screen</h1>
        <Appointment />
      </div>
    );
  }
}
