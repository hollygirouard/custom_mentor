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
  }

  handleChange(event) {
    const { formValues } = this.state;
    const { name } = event.target;
    const { value } = event.target;
    const { type } = event.target;
    type === 'checkbox' ? this.checkedBox(event, formValues, name, value) : formValues[name] = value;
    type === 'time' ? this.inputTime(event, formValues, name, value) : null;
    this.setState({ formValues });
    console.log(formValues);
  }
  checkedBox(event, formValues, name, value) {
    const checked = event.target.checked;
    const array = formValues[name];
    // checked ? formValues[name][value]=checked:formValues[name][value]=checked
    checked ? array.push(value) : array.splice(array.indexOf(value), 1);// delete array[array.indexOf(value)]
    console.log(formValues);
    this.setState({ formValues });
  }
  timeChange(event) {
    const formValues = this.state.formValues;
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    //  checked ? formValues[name][value]=[] :formValues[name][value]=false
    checked ? formValues[name][value] = [] : delete formValues[name][value];
    this.setState({ formValues });
    console.log(formValues);
    console.log('time event', event.target);
  }
  timeSet(event) {
  //  console.log("time now", event.target)
    const formValues = this.state.formValues;
    const name = event.target.name;
    const value = event.target.value;
    const timetype = event.target.getAttribute('data-type');

    // formValues.availability[name].push(value)
    formValues.availability[name][timetype] = value;
  }
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/serverapi/profile.php',
      data: `requesttype=createProfile&data=${JSON.stringify(this.state.formValues)}`,
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
    console.log(this.state);
    // this.props.onMentorSubmit(this.state.formValues)
  }

  render() {
    return (
      <div>
        <h2>Mentor Profile</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p><b>Goals: What area(s) do you want to mentor in?</b></p>
          <label>
            <input name="goals" value="educational" type="checkbox" checked={this.state.formValues.educational} onChange={this.handleChange.bind(this)} />
            Educational
          </label>
          <br />
          <label>
            <input name="goals" value="financial" type="checkbox" checked={this.state.formValues.financial} onChange={this.handleChange.bind(this)} />
            Financial
          </label>
          <br />
          <label>
            <input name="goals" value="physical" type="checkbox" checked={this.state.formValues.physical} onChange={this.handleChange.bind(this)} />
            Physical (health)
          </label>
          <br />
          <label>
            <input name="goals" value="spiritual" type="checkbox" checked={this.state.formValues.spiritual} onChange={this.handleChange.bind(this)} />
            Spiritual
          </label>
          <br />
          <label>
            <input name="goals" value="other" type="checkbox" checked={this.state.formValues.other} onChange={this.handleChange.bind(this)} />
            Other
          </label>
          <br />

          <label>
            Explain how you can help:
          </label>
          <br />
          <textarea
            style={{
            width: '50%',
            height: '200%',
          }}
            name="helpPara"
            value={this.state.formValues.helpPara}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <p>Note: mentors should be able to sign up to mentor in different areas.</p>

          <label>
            What level of mentoring do you wish to provide?
          </label>

          <div className="radio">
            <label>
              <input name="mentoring" value="cheerleader" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Cheerleader</b> – Most basic level of service the provides accountability and positive feedback with brief communications
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="mentoring" value="mentor" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Mentor</b> – More in-depth interaction, providing advice, advocacy and support at whatever level you desire. This person may not have specific experience or knowledge with the goals you are pursuing.
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="mentoring" value="coach" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Coach</b> – A mentor on steroids that provides specific advice based on experience or education in with the goal(s) you want to achieve.
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="mentoring" value="tutor" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Tutor</b> – An expert in a certain field who will provide instruction in accomplishing a specific task.
            </label>
          </div>
          <p>Note: Mentors should be able to sign up to offer more than one level of mentoring.</p>

          <p><b>How do you prefer to contact the mentee? (choose any combination)</b></p>
          <label>
            <input value="email" name="contact" type="checkbox" checked={this.state.formValues.email} onChange={this.handleChange.bind(this)} />
            Email
          </label>
          <br />
          <label>
            <input value="phone" name="contact" type="checkbox" checked={this.state.formValues.phone} onChange={this.handleChange.bind(this)} />
            Phone
          </label>
          <br />
          <label>
            <input value="text" name="contact" type="checkbox" checked={this.state.formValues.text} onChange={this.handleChange.bind(this)} />
            Text
          </label>

          <p><b>How often are you willing to communicate per week?</b></p>
          <div className="radio">
            <label>
              <input name="weekTalk" value="once" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Once</b>
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="weekTalk" value="twice" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Twice</b>
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="weekTalk" value="three" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Three times</b>
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="weekTalk" value="everyday" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Every day</b>
            </label>
          </div>

          <p><b>When are you available to contact the mentee?</b></p>
          <label>
            <input value="monday" name="availability" type="checkbox" checked={this.state.formValues.monday} onChange={this.timeChange.bind(this)} />
            Monday {this.state.formValues.availability.monday
              ? <div><input type="time" data-type="start" name="monday" onChange={this.timeSet.bind(this)} /><input type="time" data-type="end" name="monday" onChange={this.timeSet.bind(this)} /></div>
              : null
}
          </label>
          <br />
          <label>
            <input value="tuesday" name="availability" type="checkbox" checked={this.state.formValues.tuesday} onChange={this.timeChange.bind(this)} />
            Tuesday {this.state.formValues.availability.tuesday
              ? <div><input type="time" data-type="start" name="tuesday" onChange={this.timeSet.bind(this)} /><input type="time" data-type="end" name="tuesday" onChange={this.timeSet.bind(this)} /></div>
              : null
}
          </label>
          <br />
          <label>
            <input value="wednesday" name="availability" type="checkbox" checked={this.state.formValues.wednesday} onChange={this.timeChange.bind(this)} />
            Wednesday {this.state.formValues.availability.wednesday
              ? <div><input type="time" data-type="start" name="wednesday" onChange={this.timeSet.bind(this)} /><input type="time" data-type="end" name="wednesday" onChange={this.timeSet.bind(this)} /></div>
              : null
}
          </label>
          <br />
          <label>
            <input value="thursday" name="availability" type="checkbox" checked={this.state.formValues.thursday} onChange={this.timeChange.bind(this)} />
            Thursday {this.state.formValues.availability.thursday
              ? <div><input type="time" data-type="start" name="thursday" onChange={this.timeSet.bind(this)} /><input type="time" data-type="end" name="thursday" onChange={this.timeSet.bind(this)} /></div>
              : null
}
          </label>
          <br />
          <label>
            <input value="friday" name="availability" type="checkbox" checked={this.state.formValues.friday} onChange={this.timeChange.bind(this)} />
            Friday {this.state.formValues.availability.friday
              ? <div><input type="time" data-type="start" name="friday" onChange={this.timeSet.bind(this)} /><input type="time" data-type="end" name="friday" onChange={this.timeSet.bind(this)} /></div>
              : null
}
          </label>
          <br />
          <label>
            <input value="saturday" name="availability" type="checkbox" checked={this.state.formValues.saturday} onChange={this.timeChange.bind(this)} />
            Saturday {this.state.formValues.availability.saturday
              ? <div><input type="time" data-type="start" name="saturday" onChange={this.timeSet.bind(this)} /><input type="time" data-type="end" name="saturday" onChange={this.timeSet.bind(this)} /></div>
              : null
}
          </label>
          <br />
          <label>
            <input value="sunday" name="availability" type="checkbox" checked={this.state.formValues.sunday} onChange={this.timeChange.bind(this)} />
            Sunday {this.state.formValues.availability.sunday
              ? <div><input type="time" data-type="start" name="sunday" onChange={this.timeSet.bind(this)} /><input type="time" data-type="end" name="sunday" onChange={this.timeSet.bind(this)} /></div>
              : null
}
          </label>
          <br />

          <label>
            In what area(s) do you have expertise? (Separate different areas with a comma.)
          </label>
          <br />
          <textarea
            style={{
            width: '50%',
            height: '200%',
          }}
            name="expertisePara"
            value={this.state.formValues.expertisePara}
            onChange={this.handleChange.bind(this)}
          />
          <br />

          <label>
            What experience do you have?
          </label>
          <br />
          <textarea
            style={{
            width: '50%',
            height: '500%',
          }}
            name="experiencePara"
            value={this.state.formValues.experiencePara}
            onChange={this.handleChange.bind(this)}
          />
          <br />

          <label>
            What is/was your field of study in school? (Separate different fields with a comma.)
          </label>
          <br />
          <textarea
            style={{
            width: '50%',
            height: '200%',
          }}
            name="studiesPara"
            value={this.state.formValues.studiesPara}
            onChange={this.handleChange.bind(this)}
          />
          <br />

          <label>What is your highest education level attained?</label>
          <div className="radio">
            <label>
              <input name="education" value="HSStudent" type="radio" onChange={this.handleChange.bind(this)} />
              <b>High School Student</b>
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value="HSGrade" type="radio" onChange={this.handleChange.bind(this)} />
              <b>High School Graduate</b>

            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value="UStudent" type="radio" onChange={this.handleChange.bind(this)} />
              <b>College Student</b>
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value="ADGrade" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Associates Degree</b>
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value="BDGrade" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Bachelors Degree</b>
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value="Master" type="radio" onChange={this.handleChange.bind(this)} />
              <b>Masters</b>
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value="PHD" type="radio" onChange={this.handleChange.bind(this)} />
              <b>PHD</b>
            </label>
          </div>
          <div >
            <label>
              <b>Additional Degrees and Certifications:</b>
            </label>
            <br />

            <textarea
              style={{
              width: '50%',
              height: '200%',
            }}
              name="additionalDegrees"
              value={this.state.formValues.additionalDegrees}
              onChange={this.handleChange.bind(this)}
            />
            <br />
          </div>

          <p><b>Do you want to use the CustomMentor suite of relationship management tools?</b></p>
          <div className="radio">
            <label>
              <input name="managementTool" value type="radio" onChange={this.handleChange.bind(this)} />
              Yes
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="managementTool" value={false} type="radio" onChange={this.handleChange.bind(this)} />
              No
            </label>
          </div>

          <br /><input className="btn btn-primary" type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}
