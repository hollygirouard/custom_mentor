import React, {Component} from "react"
import { Link } from 'react-router-dom'

export default class EventsNav extends Component {
    render() {
        let user = this.props.currentUser
        return (
            
                <nav className="nav nav-tabs">
                	<div className="navbar-item">
                		<Link to="/">Blogs / Events</Link>
                	</div>
	                <div className="navbar-item">
	                	<Link to="/news">News</Link>
	                </div>
	                <div className="navbar-item">
	                	<Link to="/composer">Blogs Composer</Link>
	                </div>
	            </nav>
            
        )
    }
}
