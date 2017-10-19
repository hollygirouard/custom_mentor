import React, {Component} from "react"
import { Button } from 'reactstrap'

export default class Goals extends Component {
    render() {
      let user = this.props.currentUser.data.user_details
        return (
            <div>
                <h1>Goals</h1>
                <h3>{user.name}</h3>
                <h4>{user.type}</h4>
            </div>
        );
    }
}
