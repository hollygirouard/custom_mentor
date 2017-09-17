import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import NavList from './components/navigation'
import PageContent from './components/page_content'

class App extends Component {
  constructor(props){
  super(props);
  this.state={page: [],
  selectedPage:null
  }
}
  render() {

    return (
      <div>
        <NavList/>
        <PageContent page={this.state.selectedPage}/>
      </div>

    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
