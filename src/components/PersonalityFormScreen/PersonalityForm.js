// Table details - object inputed into DB table

// Custom_mentor:
//
// {Goals: {object of booleans}
// *HelpPara: “string” (personal information)
// Mentoring: “string”
// weekTalk: “string"
// Contact:{object of booleans}
// Availability : {object of {object of strings}}
// ManagementTool: boolean}
//
//
// Mentor specific:
// *expertisePara: “string” (personal information)
// *experiencePara: “string” (personal information)
// *studiesPara: “string” (personal information)
// education:”string"
//


import React, { Component } from 'react';
import axios from 'axios';

export default class PersonalityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        goals: [],
        contact: [],
        availability: {},
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.timeSet = this.timeSet.bind(this);
      this.checkedBox = this.checkedBox.bind(this);
  }

  /* eslint-disable no-unused-expressions */
  handleChange(event) {
    const { formValues } = this.state;
    const { name } = event.target;
    const { value } = event.target;
    const { type } = event.target;
    type === 'checkbox' ? this.checkedBox(event, formValues, name, value) : formValues[name] = value;
    type === 'time' ? this.inputTime(event, formValues, name, value) : null;
    this.setState({ formValues });
  }

  checkedBox(event, formValues, name, value) {
    const { checked } = event.target;
    const array = formValues[name];
    // checked ? formValues[name][value]=checked:formValues[name][value]=checked
    checked ? array.push(value) :
      array.splice(array.indexOf(value), 1);// delete array[array.indexOf(value)]
    this.setState({ formValues });
  }
  timeChange(event) {
    const { formValues } = this.state;
    const { name } = event.target;
    const { value } = event.target;
    const { checked } = event.target;
    //  checked ? formValues[name][value]=[] :formValues[name][value]=false
    checked ? formValues[name][value] = [] : delete formValues[name][value];
    this.setState({ formValues });
    // console.log(formValues);
    // console.log('time event', event.target);
  }

  timeSet(event) {
  //  console.log("time now", event.target)
    const { formValues } = this.state;
    const { name } = event.target;
    const { value } = event.target;
    const timetype = event.target.getAttribute('data-type');

    // formValues.availability[name].push(value)
    formValues.availability[name][timetype] = value;
  }

  /* eslint-disable no-console */
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost/custommentor/custom_mentor/serverapi/profile.php',
      data: `requesttype=createProfile&data=${JSON.stringify(this.state.formValues)}`,
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
    console.log(this.state);
    // this.props.onMentorSubmit(this.state.formValues)
  }
  /* eslint-enable no-console */

  render() {
    return (
      <div className="screen">
        <h2>Mentor Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <p><b>Goals: What area(s) do you want to mentor in?</b></p>
          <label htmlFor="educational-goal">
            <input
              id="educational-goal"
              name="goals"
              value="educational"
              type="checkbox"
              checked={this.state.formValues.educational}
              onChange={this.handleChange}
            />
            Educational
          </label>
          <br />
          <label htmlFor="financial-goal">
            <input
              id="financial-goal"
              name="goals"
              value="financial"
              type="checkbox"
              checked={this.state.formValues.financial}
              onChange={this.handleChange}
            />
            Financial
          </label>
          <br />
          <label htmlFor="physical-goal">
            <input
              id="physical-goal"
              name="goals"
              value="physical"
              type="checkbox"
              checked={this.state.formValues.physical}
              onChange={this.handleChange}
            />
            Physical (health)
          </label>
          <br />
          <label htmlFor="spiritual-goal">
            <input
              id="spiritual-goal"
              name="goals"
              value="spiritual"
              type="checkbox"
              checked={this.state.formValues.spiritual}
              onChange={this.handleChange}
            />
            Spiritual
          </label>
          <br />
          <label htmlFor="other-goal">
            <input
              id="other-goal"
              name="goals"
              value="other"
              type="checkbox"
              checked={this.state.formValues.other}
              onChange={this.handleChange}
            />
            Other
          </label>
          <br />

          <label htmlFor="explain-help">
            Explain how you can help:
          <br />
            <textarea
              style={{
              width: '50%',
              height: '200%',
            }}
              id="explain-help"
              name="helpPara"
              value={this.state.formValues.helpPara}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <p>Note: mentors should be able to sign up to mentor in different areas.</p>

          <h4>
            What level of mentoring do you wish to provide?
          </h4>

          <div className="radio">
            <label htmlFor="mentor-radio1">
              <input
                id="mentor-radio"
                name="mentoring"
                value="cheerleader"
                type="radio"
                onChange={this.handleChange}
              />
              {/* eslint-disable max-len */}
              <b>Cheerleader</b>
                – Most basic level of service the provides accountability and positive feedback with brief communications
            </label>
          </div>
          <div className="radio">
            <label htmlFor="mentor-radio2">
              <input
                id="mentor-radio2"
                name="mentoring"
                value="mentor"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Mentor</b> – More in-depth interaction, providing advice, advocacy and support at whatever level you desire. This person may not have specific experience or knowledge with the goals you are pursuing.
            </label>
          </div>
          <div className="radio">
            <label htmlFor="mentor-radio3">
              <input
                id="mentor-radio3"
                name="mentoring"
                value="coach"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Coach</b> – A mentor on steroids that provides specific advice based on experience or education in with the goal(s) you want to achieve.
            </label>
          </div>
          <div className="radio">
            <label htmlFor="mentor-radio4">
              <input
                id="mentor-radio4"
                name="mentoring"
                value="tutor"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Tutor</b> – An expert in a certain field who will provide instruction in accomplishing a specific task.
            </label>
          </div>
          <p>Note: Mentors should be able to sign up to offer more than one level of mentoring.</p>

          <p><b>How do you prefer to contact the mentee? (choose any combination)</b></p>
          <label htmlFor="mentor-checkbox1">
            <input
              id="mentor-checkbox1"
              value="email"
              name="contact"
              type="checkbox"
              checked={this.state.formValues.email}
              onChange={this.handleChange}
            />
            Email
          </label>
          <br />
          <label htmlFor="mentor-checkbox2">
            <input
              id="mentor-checkbox2"
              value="phone"
              name="contact"
              type="checkbox"
              checked={this.state.formValues.phone}
              onChange={this.handleChange}
            />
            Phone
          </label>
          <br />
          <label htmlFor="mentor-checkbox3">
            <input
              id="mentor-checkbox3"
              value="text"
              name="contact"
              type="checkbox"
              checked={this.state.formValues.text}
              onChange={this.handleChange}
            />
            Text
          </label>

          <p><b>How often are you willing to communicate per week?</b></p>
          <div className="radio">
            <label htmlFor="radio-once">
              <input
                id="radio-once"
                name="weekTalk"
                value="once"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Once</b>
            </label>
          </div>
          <div className="radio">
            <label htmlFor="radio-twice">
              <input
                id="radio-twice"
                name="weekTalk"
                value="twice"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Twice</b>
            </label>
          </div>
          <div className="radio">
            <label htmlFor="radio-thrice">
              <input
                id="radio-thrice"
                name="weekTalk"
                value="three"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Three times</b>
            </label>
          </div>
          <div className="radio">
            <label htmlFor="radio-everyday">
              <input
                id="radio-everyday"
                name="weekTalk"
                value="everyday"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Every day</b>
            </label>
          </div>

          <p><b>When are you available to contact the mentee?</b></p>
          <label htmlFor="checkbox-monday">
            <input
              id="checkbox-monday"
              value="monday"
              name="availability"
              type="checkbox"
              checked={this.state.formValues.monday}
              onChange={this.timeChange}
            />
            Monday {this.state.formValues.availability.monday
              ?
                <div>
                  <input
                    type="time"
                    data-type="0"
                    name="monday"
                    onChange={this.timeSet}
                  />
                  <input type="time" data-type="1" name="monday" onChange={this.timeSet} />
                </div>
              : null}
          </label>
          <br />
          <label htmlFor="checkbox-teusday">
            <input
              id="checkbox-teusday"
              value="tuesday"
              name="availability"
              type="checkbox"
              checked={this.state.formValues.tuesday}
              onChange={this.timeChange}
            />
            Tuesday {this.state.formValues.availability.tuesday
              ?
                <div>
                  <input
                    type="time"
                    data-type="0"
                    name="tuesday"
                    onChange={this.timeSet}
                  />
                  <input type="time" data-type="1" name="tuesday" onChange={this.timeSet} />
                </div>
              : null}
          </label>
          <br />
          <label htmlFor="checkbox-wednesday">
            <input
              id="checkbox-wednesday"
              value="wednesday"
              name="availability"
              type="checkbox"
              checked={this.state.formValues.wednesday}
              onChange={this.timeChange}
            />
            Wednesday {this.state.formValues.availability.wednesday
              ?
                <div>
                  <input
                    type="time"
                    data-type="0"
                    name="wednesday"
                    onChange={this.timeSet}
                  />
                  <input type="time" data-type="1" name="wednesday" onChange={this.timeSet} />
                </div>
              : null
}
          </label>
          <br />
          <label htmlFor="checkbox-thursday">
            <input
              id="checkbox-thursday"
              value="thursday"
              name="availability"
              type="checkbox"
              checked={this.state.formValues.thursday}
              onChange={this.timeChange}
            />
            Thursday {this.state.formValues.availability.thursday
              ?
                <div>
                  <input type="time" data-type="0" name="thursday" onChange={this.timeSet} />
                  <input type="time" data-type="1" name="thursday" onChange={this.timeSet} />
                </div>
              : null
}
          </label>
          <br />
          <label htmlFor="checkbox-friday">
            <input
              id="checkbox-friday"
              value="friday"
              name="availability"
              type="checkbox"
              checked={this.state.formValues.friday}
              onChange={this.timeChange}
            />
            Friday {this.state.formValues.availability.friday
              ?
                <div>
                  <input type="time" data-type="0" name="friday" onChange={this.timeSet} />
                  <input type="time" data-type="1" name="friday" onChange={this.timeSet} />
                </div>
              : null
}
          </label>
          <br />
          <label htmlFor="checkbox-saturday">
            <input
              id="checkbox-saturday"
              value="saturday"
              name="availability"
              type="checkbox"
              checked={this.state.formValues.saturday}
              onChange={this.timeChange}
            />
            Saturday {this.state.formValues.availability.saturday
              ?
                <div>
                  <input type="time" data-type="0" name="saturday" onChange={this.timeSet} />
                  <input type="time" data-type="1" name="saturday" onChange={this.timeSet} />
                </div>
              : null}
          </label>
          <br />
          <label htmlFor="checkbox-sunday">
            <input
              id="checkbox-sunday"
              value="sunday"
              name="availability"
              type="checkbox"
              checked={this.state.formValues.sunday}
              onChange={this.timeChange}
            />
            Sunday {this.state.formValues.availability.sunday
              ?
                <div>
                  <input type="time" data-type="0" name="sunday" onChange={this.timeSet} />
                  <input type="time" data-type="1" name="sunday" onChange={this.timeSet} />
                </div>
              : null}
          </label>
          <br />

          <label htmlFor="textarea-expertise">
            In what area(s) do you have expertise? (Separate different areas with a comma.)
          <br />
            <textarea
              style={{
                width: '50%',
                height: '200%',
              }}
              id="textarea-expertise"
              name="expertisePara"
              value={this.state.formValues.expertisePara}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label htmlFor="textarea-experience">
            What experience do you have?
          <br />
            <textarea
              style={{
                width: '50%',
                height: '500%',
              }}
              id="textarea-experience"
              name="experiencePara"
              value={this.state.formValues.experiencePara}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="textarea-field-study">
            What is/was your field of study in school? (Separate different fields with a comma.)
          <br />
            <textarea
              style={{
                width: '50%',
                height: '200%',
              }}
              id="textarea-field-study"
              name="studiesPara"
              value={this.state.formValues.studiesPara}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <h4>What is your highest education level attained?</h4>
          <div className="radio">
            <label htmlFor="education-high-school">
              <input
                id="education-high-school"
                name="education"
                value="HSStudent"
                type="radio"
                onChange={this.handleChange}
              />
              <b>High School Student</b>
            </label>
          </div>
          <div className="radio">
            <label htmlFor="high-school-graduate">
              <input
                id="high-school-graduate"
                name="education"
                value="HSGrade"
                type="radio"
                onChange={this.handleChange}
              />
              <b>High School Graduate</b>
            </label>
          </div>
          <div className="radio">
            <label htmlFor="college-graduate">
              <input
                id="college-graduate"
                name="education"
                value="UStudent"
                type="radio"
                onChange={this.handleChange}
              />
              <b>College Student</b>
            </label>
          </div>
          <div className="radio">
            <label htmlFor="asso-degree">
              <input
                id="asso-degree"
                name="education"
                value="ADGrade"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Associates Degree</b>
            </label>
          </div>
          <div className="radio">
            <label htmlFor="back-degree">
              <input
                id="back-degree"
                name="education"
                value="BDGrade"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Bachelors Degree</b>
            </label>
          </div>
          <div className="radio">
            <label htmlFor="masters-degree">
              <input
                id="masters-degree"
                name="education"
                value="Master"
                type="radio"
                onChange={this.handleChange}
              />
              <b>Masters</b>
            </label>
          </div>
          <div className="radio">
            <label htmlFor="phd-degree">
              <input
                id="phd-degree"
                name="education"
                value="PHD"
                type="radio"
                onChange={this.handleChange}
              />
              <b>PHD</b>
            </label>
          </div>
          <div >
            <label htmlFor="add-degrees">
              <b>Additional Degrees and Certifications:</b>
            </label>
            <br />

            <textarea
              style={{
              width: '50%',
              height: '200%',
            }}
              id="add-degrees"
              name="additionalDegrees"
              value={this.state.formValues.additionalDegrees}
              onChange={this.handleChange}
            />
            <br />
          </div>

          <p><b>Do you want to use the CustomMentor suite of relationship management tools?</b></p>
          {/* TODO: What waas the value here for this input??? */}
          <div className="radio">
            <label htmlFor="manage-tool-yes">
              <input
                id="manage-tool-yes"
                name="managementTool"
                value={false}
                type="radio"
                onChange={this.handleChange}
              />
              Yes
            </label>
          </div>
          <div className="radio">
            <label htmlFor="manage-tool-no">
              <input
                id="manage-tool-no"
                name="managementTool"
                value={false}
                type="radio"
                onChange={this.handleChange}
              />
              No
            </label>
          </div>
          <br /><input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
