import React, {Component} from "react";

export class Title extends Component {

  render() {
    return (
      <div className="title">
        <img className="titlelogo" src='/image/CustomMentorTitle.png'/>
        <p>You Goals, Your Way</p><br/>
        <p>Everyone should have a mentor.</p>
        <p>Whether your goals are educational, financial, physical, spiritual or anything else, a mentor can help you to achieve them.</p>
        <p>CustomMentor matches the specific needs of mentees with mentors who custom tailor their services to meet them.</p>
        <p>Choose from four levels of mentoring… Cheerleader, Mentor, Coach or Tutor.</p>
      </div>

    );
  }
}
