import React, {Component} from "react";

export class MentorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {
        educational: false,
        financial: false,
        physical: false,
        spiritual: false,
        other: false,
        helpInfo: ""
      }
    }
  }

  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
    formValues[name] = value;
    this.setState({formValues})
  }
  handleCheckedChange(event) {
    event.preventDefault();
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
            Explain how you can help:
          </label>
          <br/>
          <textarea style={{
            width: '50%',
            height: '200%'
          }} name="helpInfo" value={this.state.formValues["helpInfo"]} onChange={this.handleChange.bind(this)}/>

          <br/><input className="btn btn-primary" type="submit" value="Submit"/>

        </form>
      </div>
    );
  }
}
