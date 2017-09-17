import React from 'react';
import '../style/navigation.css'
import { Nav, NavItem } from 'react-bootstrap';


const NavList = React.createClass({
  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    console.log(key)
    this.setState({key});
    console.log(this)
  },

  render() {
    return (
      <div className ="col-sm-2">
      <Nav activeKey={this.state.key} stacked onSelect={this.handleSelect} id="controlled-tab-example">
        <NavItem eventKey={1} title="Tab 1">Tab 1 content</NavItem>
        <NavItem eventKey={2} title="Tab 2">Tab 2 content</NavItem>
        <NavItem eventKey={3} title="Tab 3" >Tab 3 content</NavItem>
      </Nav>
    </div>
    );
  }
});


export default NavList
