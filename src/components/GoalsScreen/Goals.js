import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import classnames from 'classnames';
import Achievement from './Achievement';
import Milestones from './Milestones';
import Steps from './Steps';

export default class Goals extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    const user = this.props.currentUser.data.user_details;
    return (
      <div>
        <h1>Goals</h1>
        <h3>{user.name}</h3>
        <h4>{user.type}</h4>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
                      My Milestones
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
                      Milestone Steps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
                      Achievement History
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Milestones />
          </TabPane>
          <TabPane tabId="2">
            <Steps />
          </TabPane>
          <TabPane tabId="3">
            <Achievement />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
