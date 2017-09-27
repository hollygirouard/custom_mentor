import React, {Component} from "react";

export class MenteeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {
        // educational: false,
        // financial: false,
        // physical: false,
        // spiritual: false,
        // other: false,
        // helpInfo: "",
        // mentoring: "",
        // weekTalk:""
      }
    }
  }

  handleChange(event) {
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
    formValues[name] = value;
    this.setState({formValues})
  }
  handleCheckedChange(event) {
    let formValues = this.state.formValues;
    let name = event.target.name;
    let checked = event.target.checked;
    formValues[name] = checked;
    this.setState({formValues})
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)

    // this.props.onMentorSubmit(this.state.formValues)
  }

  render() {
    return (
      <div>
        <h2>Mentor Profile</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p>Goals: What area(s) do you want to be mentored in?</p>
          <label>
            <input name="educational" type="checkbox" checked={this.state.formValues["educational"]} onChange={this.handleCheckedChange.bind(this)}/>
            Educational
          </label>
          <br/>
          <label>
            <input name="financial" type="checkbox" checked={this.state.formValues["financial"]} onChange={this.handleCheckedChange.bind(this)}/>
            Financial
          </label>
          <br/>
          <label>
            <input name="physical" type="checkbox" checked={this.state.formValues["physical"]} onChange={this.handleCheckedChange.bind(this)}/>
            Physical (health)
          </label>
          <br/>
          <label>
            <input name="spiritual" type="checkbox" checked={this.state.formValues["spiritual"]} onChange={this.handleCheckedChange.bind(this)}/>
            Spiritual
          </label>
          <br/>
          <label>
            <input name="other" type="checkbox" checked={this.state.formValues["other"]} onChange={this.handleCheckedChange.bind(this)}/>
            Other
          </label>
          <br/>

          <label>
            Explain what you want help with:
          </label>
          <br/>
          <textarea style={{
            width: '50%',
            height: '200%'
          }} name="helpInfo" value={this.state.formValues["helpInfo"]} onChange={this.handleChange.bind(this)}/>
          <br/>
          <p>Note: mentees should be able to sign up for multiple mentors, in different areas.</p>

          <label>
            What level of mentoring do you desire?
          </label>

          <div className="radio">
            <label>
              <input name="mentoring" value={"cheerleader"} type="radio" onChange={this.handleChange.bind(this)}/>
              Cheerleader – Most basic level of service the provides accountability and positive feedback with brief communications
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="mentoring" value={"mentor"} type="radio" onChange={this.handleChange.bind(this)}/>
              Mentor – More in-depth interaction, providing advice, advocacy and support at whatever level you desire. This person may not have specific experience or knowledge with the goals you are pursuing.
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="mentoring" value={"coach"} type="radio" onChange={this.handleChange.bind(this)}/>
              Coach – A mentor on steroids that provides specific advice based on experience or education in with the goal(s) you want to achieve.
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="mentoring" value={"tutor"} type="radio" onChange={this.handleChange.bind(this)}/>
              Tutor – An expert in a certain field who will provide instruction in accomplishing a specific task.
            </label>
          </div>

          <p>How do you want to be contacted? (choose any combination)</p>
          <label>
            <input name="email" type="checkbox" checked={this.state.formValues["email"]} onChange={this.handleCheckedChange.bind(this)}/>
            Email
          </label>
          <br/>
          <label>
            <input name="phone" type="checkbox" checked={this.state.formValues["phone"]} onChange={this.handleCheckedChange.bind(this)}/>
            Phone
          </label>
          <br/>
          <label>
            <input name="text" type="checkbox" checked={this.state.formValues["text"]} onChange={this.handleCheckedChange.bind(this)}/>
            Text
          </label>

          <p>How often do you want to be contacted per week?</p>
          <div className="radio">
            <label>
              <input name="weekTalk" value={"once"} type="radio" onChange={this.handleChange.bind(this)}/>
              Once
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="weekTalk" value={"twice"} type="radio" onChange={this.handleChange.bind(this)}/>
              Twice
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="weekTalk" value={"three"} type="radio" onChange={this.handleChange.bind(this)}/>
              Three times
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="weekTalk" value={"everyday"} type="radio" onChange={this.handleChange.bind(this)}/>
              Every day
            </label>
          </div>

          <p>When do you want to be contacted by your mentor?</p>
          <label>
            <input name="monday" type="checkbox" checked={this.state.formValues["monday"]} onChange={this.handleCheckedChange.bind(this)}/>
            Monday {this.state.formValues.monday
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input name="tuesday" type="checkbox" checked={this.state.formValues["tuesday"]} onChange={this.handleCheckedChange.bind(this)}/>
            Tuesday {this.state.formValues.tuesday
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input name="wednesday" type="checkbox" checked={this.state.formValues["wednesday"]} onChange={this.handleCheckedChange.bind(this)}/>
            Wednesday {this.state.formValues.wednesday
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input name="thursday" type="checkbox" checked={this.state.formValues["thursday"]} onChange={this.handleCheckedChange.bind(this)}/>
            Thursday {this.state.formValues.thursday
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input name="friday" type="checkbox" checked={this.state.formValues["friday"]} onChange={this.handleCheckedChange.bind(this)}/>
            Friday {this.state.formValues.friday
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input name="saturday" type="checkbox" checked={this.state.formValues["saturday"]} onChange={this.handleCheckedChange.bind(this)}/>
            Saturday {this.state.formValues.saturday
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input name="sunday" type="checkbox" checked={this.state.formValues["sunday"]} onChange={this.handleCheckedChange.bind(this)}/>
            Sunday {this.state.formValues.sunday
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>

          <p>Do you want to use the CustomMentor suite of goal tracking tools?</p>
          <div className="radio">
            <label>
              <input name="management" value={"yes"} type="radio" onChange={this.handleChange.bind(this)}/>
              Yes
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="management" value={"no"} type="radio" onChange={this.handleChange.bind(this)}/>
              No
            </label>
          </div>

          <br/><input className="btn btn-primary" type="submit" value="Submit"/>

        </form>
      </div>
    );
  }
}
