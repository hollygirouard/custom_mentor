import React, {Component} from "react";
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {MentorPage} from "./components/MentorPage";
import {MenteePage} from "./components/MenteePage";


export class App extends Component {
  toRoute(page){
    console.log("route", page);
  }
    render() {
        return (
          <Router history = {browserHistory}>
            <Route path={"/"} component={Root} >
              <IndexRoute component={Home} />
              <Route path={"/mentor"} component={MentorPage} ></Route>
              <Route path={"/mentee"} component={MenteePage} ></Route>
            </Route>

          </Router>
        );
    }
}




render(<App />, document.getElementById('root'));
