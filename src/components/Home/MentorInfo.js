import React, { Component } from 'react';

/* eslint-disable max-len */
export default class MentorInfo extends Component {
  render() {
    return (
      <section className="section-padding dark-section">
        <div className="container">
          <div className="row">
            <div className="header-section text-center">
              <h2 className="white">Why should I be a CustomMentor?</h2>
              <p className="white">Almost everyone can be a mentor. With any background whatsoever, whether a student,
    businessperson, doctor, scientist, waiter, checkout clerk, convict, pastor or unemployed person, you
    have skills, experience and insight to pass along.</p>
              <p className="white">As independent contractors, CustomMentor allows its mentors to choose when and how much to work,
    what to charge and who to mentor. Guided by a comprehensive profile CustomMentors are matched
    with likely mentees based on your specifications. People will pay for your mentoring services based on
    what you bring to the table; your personality, education, intelligence, experience and potential for
    contribution.</p>
              <hr className="bottom-line bg-white" />
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="text-comment">
                <h3>Exclusive CustomMentor Benefits</h3>
                <ol className="text-par">
                  <li><strong>Flexibility</strong> &mdash; choose what type of mentoring to provide (cheerleader, mentor, coach, tutor)</li>
                  <li><strong>Convenient</strong> &mdash; work when, where, and how much you want</li>
                  <li><strong>Work with people you like</strong> &mdash; CustomMentors choose which mentees they want to work with</li>
                  <li><strong>Engagement</strong> &mdash; dealing with a variety of mentees keeps work fresh and interesting</li>
                  <li><strong>Feedback</strong> &mdash; frequent opportunities for comment and a built-in ratings system</li>
                  <li><strong>Competitive pay</strong> &mdash; CustomMentors charge what they want based on what they can offer and
        what the market will bear. Mentees decide if they want to pay the asking price, negotiate, or
        find a different mentor.
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="text-comment">
                <h3>Additional Mentor Benefits</h3>
                <ol className="text-par">
                  <li>Expand your of sphere of influence</li>
                  <li>Learn from your mentee</li>
                  <li>Reinforce accomplishments</li>
                  <li>Opportunity for reciprocation</li>
                  <li>Increased recognition</li>
                  <li>Improved communication and people skills</li>
                  <li>Opportunity to change another’s life</li>
                  <li>Positive self-esteem from helping another</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
