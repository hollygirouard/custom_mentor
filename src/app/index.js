import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Home} from "./components/Home";


class App extends Component {
    render() {
        return (
            <div><Home /></div>

        );
    }
}

render(<App />, window.document.getElementById('root'));

export default App
