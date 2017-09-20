import React, {Component} from "react";
import {Button, Menu, Icon, Header, Modal} from 'semantic-ui-react';

export class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <Modal trigger={<Button className="login_button">Log In</Button>}>
          <Modal.Header>Login</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Please login with a username and password</Header>
            </Modal.Description>
          </Modal.Content>
        </Modal>

      </div>
    );
  }
}
