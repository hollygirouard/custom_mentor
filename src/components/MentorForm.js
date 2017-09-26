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
      this.props.onSignIn(this.state.formValues)
  }

  render() {
    return (
      <div>
      <h2>Mentor Profile</h2>
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
      </div>
    );
  }
}
