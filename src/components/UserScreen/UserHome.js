import React, {Component} from "react"
import { Button } from 'reactstrap'

export default class UserHome extends Component {
    render() {
        let user = this.props.currentUser
        
        return (
            <div>
                <h1>User Home Screen</h1>
                <h3>{user.name}</h3>
                <h4>{user.type}</h4>
                <Button color="primary" onClick={() => this.props.userSignOut()}>Sign out</Button>
            </div>
        );
    }
}
