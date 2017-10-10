import React, {Component} from "react";
import { Jumbotron } from 'reactstrap';

export class MenteeInfo extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 class="display-3">Why do I need a mentor?</h1>
          <p>Absolutely everyone needs a mentor! The most successful among us will credit to one extent or another a mentor (or perhaps more than one) in their lives. <strong>Regardless of your goals, a mentor can help you reach them.</strong></p>
        </Jumbotron>
        <p>Whether it is saving for a vacation or retirement, losing weight or getting fit, starting a business or getting a promotion, passing a course or finding your life’s purpose, and anything else, a good mentor is essential. However, the specific personalities and needs of every person vary. You need mentoring tailored to your exact specifications, at a reasonable price, from someone who you can trust who matches your custom designed profile.</p>

        <h3>A CustomMentor Can Provide:</h3>

        <ul>
          <li>Increased <strong>confidence</strong></li>
          <li>access to valuable <strong>resources &amp; skill sets</strong></li>
          <li>role models</li>
          <li>higher probability of <strong>goal attainment</strong></li>
          <li><strong>support</strong> in attaining skills, knowledge, attitudes, and culture awareness</li>
          <li><strong>encouragement</strong> for faster learning and growth &mdash; both personal and professional</li>
          <li>greater <strong>exposure</strong> and visibility</li>
          <li>increased feeling of being more valued as an employee</li>
          <li>improved <strong>communication skills</strong> and expanded network</li>
          <li>130% greater likelihood of being in a <strong>leadership</strong> role</li>
        </ul>
      </div>
    );
  }
}
