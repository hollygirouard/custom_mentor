import React, {Component} from "react";


export class Signup extends Component {
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
        this.props.onSignUp(this.state.formValues)

    }

        render(){
        return (
          <div>

          <h3>Sign-in</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Name:
              <input type="text" name="name" placeholder="Name" value={this.state.formValues["ame"]} onChange={this.handleChange.bind(this)} />
          </label><br />

                <label> E-mail:
                    <input type="email" name="email" placeholder="E-mail" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)} />
                </label><br />
                <label> Password:
                    <input type="password" name="password" placeholder="Password" value={this.state.formValues["password"]} onChange={this.handleChange.bind(this)}/>
                </label><br />
                <label> Confirm Password:
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.formValues["confirmPassword"]} onChange={this.handleChange.bind(this)}/>
                </label><br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
           </form>
         </div>

      )
    }
}
