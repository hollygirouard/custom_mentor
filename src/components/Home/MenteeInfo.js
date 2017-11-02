import React, { Component } from 'react';

export default class MenteeInfo extends Component {
  render() {
    return (
      <div>
        <section id="feature" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="header-section text-center">
                <h2>Why do I need a mentor?</h2>
                <p>CustomMentor maintains that absolutely everyone needs a mentor. If honest, anyone that has achieved success will credit to one extent or another a mentor (or perhaps more than one) in their lives. Regardless of the goal, a mentor can help you get there.</p>
                <hr className="bottom-line" />
              </div>
              <div className="feature-info">
                <div className="fea">
                  <div className="col-md-4">
                    <div className="heading pull-right">
                      <h4>Achieve More!</h4>
                      <p>Whether it is saving for a vacation or retirement, losing weight or getting fit, starting a business or getting a promotion, passing a course or finding your life’s purpose, and anything else, a good mentor is essential.</p>
                    </div>
                    <div className="fea-img pull-left">
                      <i className="fa fa-css3"></i>
                    </div>
                  </div>
                </div>
                <div className="fea">
                  <div className="col-md-4">
                    <div className="heading pull-right">
                      <h4>Personalized Experience!</h4>
                      <p>Specific personalities and needs of every person vary, so we tailor to your exact specifications.
                        We create a secure atmosphere and match for your personalized profile.</p>
                    </div>
                    <div className="fea-img pull-left">
                      <i className="fa fa-drupal"></i>
                    </div>
                  </div>
                </div>
                <div className="fea">
                  <div className="col-md-4">
                    <div className="heading pull-right">
                      <h4>Succed!</h4>
                      <ol>
                        <li>Increased confidence</li>
                        <li>Access to role models</li>
                        <li>Higher probability of goal attainment</li>
                        <li>Personal links to valuable resources &amp; skill sets</li>
                        <li>Support in attaining skills/ knowledge/ attitudes/ culture awareness</li>
                        <li>Encouragement for faster learning and growth—both personal and professional</li>
                        <li>Greater exposure and visibility</li>
                        <li>Increased feeling of being more valued as an employee</li>
                        <li>Improved communication and expanded network</li>
                        <li>130% greater likelihood of being in a leadership role</li>
                      </ol>
                    </div>
                    <div className="fea-img pull-left">
                      <i className="fa fa-trophy"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
