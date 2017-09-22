import React, {Component} from "react";
import { browserHistory } from "react-router";

export class About extends Component {


    render() {
        return (
            <div>
                <h3>About</h3>
                <p>CustomMentor was actually started as an outgrowth of a nonprofit organization called Blossom Care Network (BCN), that provides trauma informed mentoring for abused, exploited and at-risk youth.  The thought was to create an application that would, 1) create a pipeline of new youth mentors and kiddos in need of mentoring, 2) financially support the operations of BCN, and 3) provide a profitable mentoring platform for young people as they transition into adulthood, and for the general public.</p>
                <p>While investigating the need for such a mentoring service, it was discovered that although there are mentoring programs for almost any goal, they are not typically tailored to the needs of the mentee.  In other words, anyone who wishes to me mentored must agree to participate in a set program as it exists.  There is no customization to the specific needs of the mentee.  In addition, there is no one-stop shop for mentoring, where individuals can define their expectations and select from a pool of mentors that best meet their desires.  </p>
                <p>CustomMentor changes that.  Here, anyone can find a competent mentor that provides service where, when and how the mentee wants.  On the flip side, mentors can set their price, define their services, verify their backgrounds, and decline or accept new mentoring relationships as they wish.</p>

            </div>
        );
    }
}
