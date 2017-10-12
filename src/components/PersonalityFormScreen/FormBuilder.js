import React, {Component} from 'react'
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap'
import { BrowserRouter as Link } from 'react-router-dom'
import _ from 'lodash'

export default class FormBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            formValues: {
                education: "PHD"
            }
        }
    }

    renderField(item) {
        switch(item.type) {
            case 'checkbox':
            case 'radio': {
                const selections = []
                _.forOwn(item.options, (option) => {
                    selections.push(     
                        <FormGroup check key={option}>
                            <Label check>
                                <Input 
                                    type={item.type}
                                    name={option}
                                    onChange={(event) => this.handleChange(item, event)}
                                    />
                                {' '}
                                {option}
                            </Label>
                            {item.inputs === "renderTime" && _.indexOf(this.state.formValues.aviblity, option) > -1  ? 
                                this.renderTime(item, option) 
                                : null}
                        </FormGroup>
                    )
                })
                return (
                    <div>
                        {item.message ? <span>{item.message}</span> : null}
                        {selections}
                    </div>
                )
            }
            case 'select-one': {
                const options = []
                options.push(<option key="select-one" value="">select...</option>)
                _.forOwn(item.options, (option) => {
                    options.push(<option key={option} value={option}>{option}</option>)
                })
                return (
                    <Input 
                        id={item.title}
                        type="select" 
                        name={item.key}
                        value={this.state.formValues[item.key]}
                        onChange={(event) => this.handleChange(item, event)}
                        >
                        {options}
                    </Input>
                )
            }
            default: {
                return (  
                    <Input 
                        id={item.title}
                        type={item.type} 
                        name={item.key} 
                        onChange={(event) => this.handleChange(item, event)}
                        />
                )
            }
        }
    }

    renderItem(item) {
        const renderedField = this.renderField(item)
        return (
                <FormGroup row key={item.title}>
                    <Label for={item.title} sm={2}>{item.title}</Label>
                    <Col sm={10}>
                        {renderedField}
                    </Col>
                </FormGroup>
		    )
    }

    renderGroup(form) {
        const renderedItems = []
        _.forOwn(form.group, (item) => {
            renderedItems.push(this.renderItem(item))
        })
        return (
			<div key={form.key}>
				<h1>{form.title}</h1>
				{renderedItems}
			</div>
		)
    }

    renderTime(item, option) {
        let newItem = {
            key: 'times',
            type: 'time-object',
            option
        }
        return (
            <div>
                <Label>Time Start</Label>
                <Input 
                    type="time" 
                    name="timeStart"
                    onChange={(event) => this.handleChange(newItem, event)}/>{' '}
                <Label>Time End</Label>
                <Input 
                    type="time" 
                    name="timeEnd"
                    onChange={(event) => this.handleChange(newItem, event)}/>{' '}
            </div>
        )
    }

    handleChange(item, event) {
        let formValues = this.state.formValues
        let name = event.target.name
        let value = event.target.value
        let type = event.target.type
        let checked = event.target.checked

        if(type === 'checkbox' && formValues[item.key]) {
            if(checked) {
                formValues[item.key].push(name)
                    // ********* FOR AVIBILITY ONLY *********
                    // ADD DAY TO TIMES WHEN DAY IS SELECTED
                    if(item.key === 'aviblity') {
                        if(formValues.times) {
                            let times = formValues.times
                            let day = {}
                            day[name] = {}
                            formValues.times = Object.assign(day, times)
                        }
                    }
                    // ********* 
            } 
            else {
                let index = formValues[item.key].indexOf(name)
                formValues[item.key].splice(index, 1)
                // ********* FOR AVIBILITY ONLY *********
                // REMOVE DAY FROM TIMES WHEN DAY IS UN-SELECTED
                if(formValues.times) {
                    let times = formValues.times
                    delete times[name]
                }
                // ********* 
            }
        } 
        else if(type === 'checkbox' && !formValues[item.key]) {
            let array = []
            array.push(name)
            formValues[item.key] = array
        }
        // ********* FOR AVIBILITY ONLY *********
        // ADD TIMES TO DAY 
        else if(item.type === 'time-object') {
            let times = {}
            let day = {}
            if(formValues.times) {
                times = formValues.times
            }
            if(times[item.option]) {
                day = times[item.option]
            }
            day[name] = value
            times[item.option] = day
            formValues[item.key] = times
        }
        // ********* 
        else {
            formValues[item.key] = value 
        }
        this.setState({formValues})
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }
    
    render() {
        return(
                <Form className="personality-form">
                    {this.renderGroup(this.props.schema)}
                    <FormGroup row>
                        <Col sm={{size: 8}}>
                            <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
        )
    }
}