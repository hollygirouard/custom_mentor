import React, {Component} from "react"
import { Route, Switch } from 'react-router-dom'
import EventsNav from "./EventsNav"
import News from "./News"
import Blogs from "./Blogs"
import Composer from "./Composer"

export default class Events extends Component {
    render() {
        let user = this.props.currentUser
        return (
            <div className="screen">
                <h1>Events Screen</h1>
                <EventsNav></EventsNav>
                <Switch>
                	<Route path="/" component={News} />
                	<Route path="/blogs" component={Blogs} />
                	<Route path="/composer" component={Composer} />
                </Switch>
                

            </div>
        )
    }
}
