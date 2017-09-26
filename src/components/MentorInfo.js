import React, {Component} from "react";
import { browserHistory } from "react-router";

export class MentorInfo extends Component {


    render() {
        return (
            <div>
                <h3>Why do I need a mentor?</h3>
                <p>CustomMentor maintains that absolutely everyone needs a mentor. If honest, anyone that has achieved
success will credit to one extent or another a mentor (or perhaps more than one) in their lives.
Regardless of the goal, a mentor can help you get there.</p>
                <p>While investigating the need for such a mentoring service, it was discovered that although there are mentoring programs for almost any goal, they are not typically tailored to the needs of the mentee.  In other words, anyone who wishes to me mentored must agree to participate in a set program as it exists.  There is no customization to the specific needs of the mentee.  In addition, there is no one-stop shop for mentoring, where individuals can define their expectations and select from a pool of mentors that best meet their desires.  </p>
                <p>CustomMentor changes that.  Here, anyone can find a competent mentor that provides service where, when and how the mentee wants.  On the flip side, mentors can set their price, define their services, verify their backgrounds, and decline or accept new mentoring relationships as they wish.</p>

            </div>
        );
    }
}
