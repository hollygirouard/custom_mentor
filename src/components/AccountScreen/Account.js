import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Billing from './Billing';
import Earnings from './Earnings';
import Payments from './Payments';


export default class Account extends Component {
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
      <div className="screen">
        <div className="accountTitle">

          <h1>Welcome, {user.name}</h1>
          {/* <Button color="primary" onClick={() => this.props.userSignOut()}>Sign out</Button> */}
        </div>

        <h4>{user.type}</h4>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
            My Account & Billing Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            Earnings History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
            Payment History
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Billing />
          </TabPane>
          <TabPane tabId="2">
            <Earnings />
          </TabPane>
          <TabPane tabId="3">
            <Payments />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
