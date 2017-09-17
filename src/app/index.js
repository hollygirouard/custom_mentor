import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";
import {About} from "./components/About";
import {Contact} from "./components/Contact";


class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root} >
                    <IndexRoute component={Home} />
                    <Route path={"user"} component={User} />
                    <Route path={"about"} component={About} />
                    <Route path={"contact"} component={Contact} />
                    <Route path={"home"} component={Home} />
                </Route>
                <Route path={"home-single"} component={Home}/>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById('root'));
