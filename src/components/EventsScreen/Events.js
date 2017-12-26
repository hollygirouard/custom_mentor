import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import News from "./News";
import Blogs from "./Blogs";
import Composer from "./Composer";

export default class Events extends Component {
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
        //let user = this.props.currentUser.data.user_details;
        return (
          <div className="screen">
            <div className="eventsTitle">
              <h1>Events Screen</h1>
            </div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                News Feed
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                Custom Mentor Blogs
                </NavLink>
              </NavItem>

              {/* ONLY SHOW THIS OPTION FOR AUTHORIZED BLOG AUTHORS */}
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                Blog Composer
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <News />
              </TabPane>
              <TabPane tabId="2">
                <Blogs />
              </TabPane>
              <TabPane tabId="3">
                <Composer />
              </TabPane>
            </TabContent>
                            

            </div>
        )
    }
}
