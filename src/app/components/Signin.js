import React, {Component} from "react";


export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <h3>Sign-in</h3>
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label><br/>
        <label>
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }
}
