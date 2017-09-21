import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./components/Root";
import Home from "./components/Home";
import {User} from "./components/User";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Header} from "./components/Header";

class App extends Component {
    render() {
        return (

                      // <div id ="home"><Home /></div>

              <div className="row">
                  <div className="col-xs-2">
                      <Header/>
                  </div>
                  <div className="col-xs-10">
                      <div id ="home"><Home /></div>
                      <div id ="user"><User /></div>
                      <div id ="about"><About /></div>
                      <div id ="contact"><Contact /></div>
                  </div>
          </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));

export default App
