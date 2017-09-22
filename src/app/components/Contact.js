import React, {Component} from "react";
import { browserHistory } from "react-router";

export class Contact extends Component {


    render() {
        return (
            <div>
                <h3>Contact Blossom Care Network</h3>
                <p>1600 Downing Street</p>
                <p>Suite 240</p>
                <p>Denver CO 80218</p>
                <a href="tel:+13035782422">303.578.2422</a><br/>
            </div>
        );
    }
}
