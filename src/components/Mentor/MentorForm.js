import React, {Component} from "react";

export class MentorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {}
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
            <input name="educational" type="checkbox" value={this.state.formValues["educational"]} onChange={this.handleChange.bind(this)}/>
            Educational
          </label>
          <br/>
          <label>
            <input name="financial" type="checkbox" value={this.state.formValues["financial"]} onChange={this.handleChange.bind(this)}/>
            Financial
          </label>
          <br/><input className="btn btn-primary" type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}
