import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Signin extends Component {
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

        render(){
        return (
          <div>
            <h3>Sign-in</h3>
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>{' '}
                    <Input type="email" name="email" placeholder="E-mail" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="examplePassword">Password</Label>{' '}
                    <Input type="password" name="password" placeholder="Password" value={this.state.formValues["password"]} onChange={this.handleChange.bind(this)} />
                </FormGroup>
                {' '}
                <Button>Submit</Button>
            </Form>
         </div>

      )
    }
}
