import React, {Component} from "react";

export class Title extends Component {

  render() {
    return (
      <div className="banner">
      <div className="bg-color">
        <div className="container">
          <div className="row">
            {/* <img alt = "" className="titlelogo" src='/image/CustomMentorTitle.png'/> */}
            <div className="banner-text text-center">
              <div className="text-border">
                <h2 className="text-dec">You Goals, Your Way.</h2>
              </div>
              <div className="intro-para text-center quote">
                <p>Everyone should have a mentor.</p>
                <p className="big-text">Whether your goals are educational, financial, physical, spiritual or something else, a mentor can help you to achieve them.</p>
                <p className="small-text">CustomMentor matches the specific needs of mentees with mentors who custom tailor their services to meet them.</p>
                <p className="small-text">Choose from four levels of mentoring… Cheerleader, Mentor, Coach or Tutor.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  


    );
  }
}
