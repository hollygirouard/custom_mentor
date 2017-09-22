import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Home} from "./components/Home";
import {MentorPage} from "./components/MentorPage";
import {MenteePage} from "./components/MenteePage";



class App extends Component {
    render() {
        return (
          <Router history={browserHistory}>
              <Route path={"/"} component={Home} ></Route>
              <Route path={"/mentor"} component={MentorPage} ></Route>
              <Route path={"/mentee"} component={MenteePage} ></Route>

          </Router>
        );
    }
}

render(<App />, window.document.getElementById('root'));

export default App
