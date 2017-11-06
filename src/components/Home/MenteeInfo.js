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
                <p>CustomMentor maintains that absolutely everyone needs a mentor. If honest, anyone that has achieved success will credit to one extent or another a mentor (or perhaps more than one) in their lives. Regardless of your goals, a mentor can help you get there.</p>
                <hr className="bottom-line" />
              </div>
              <div className="feature-info">
                <div className="fea">
                  <div className="col-md-4">
                    <div className="heading pull-right">
                      <h4>Achieve More</h4>
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
                      <h4>Personalized Experience</h4>
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
                      <p>Increased confidence</p>
                      <p>Access to role models</p>
                      <p>130% greater likelihood of being in a leadership role</p>
                      <p>Bring more value as an employee</p>
                      <p>Improved communication and expanded network</p>
                      <p>Greater exposure and visibility</p>
                      <p>Access to valuable resources</p>
                      {/* <p>Higher probability of goal attainment</p> */}
                      {/* <p>Support in attaining skills/ knowledge/ attitudes/ culture awareness</p> */}
                      {/* <p>Encouragement for faster learning and growth—both personal and professional</p> */}
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
