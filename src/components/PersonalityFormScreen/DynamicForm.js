import React, {Component} from 'react'
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap'
import { BrowserRouter as Link } from 'react-router-dom'
import _ from 'lodash'

const SCHEMA = {
    personality_form: {
        key: 'personality_form',
        title: 'Personality Form',
        group: [
            {key: 'areas', title: 'Mentor Areas', type: 'checkbox', options: ['educational', 'financial', 'physical', 'spiritual', 'other'], message: ''},
            {key: 'level', title: 'Mentoring Level', type: 'select', options: ['cheerleader', 'mentor', 'coach', 'tutor'], message: ''},
            {key: 'contact_preferance', title: 'Contact Preferance', type: 'checkbox', options: ['email', 'phone', 'text', ], message: ''},
            {key: 'time_commitment', title: 'Time Commitment', type: 'select', options: ['once', 'twice', 'three', 'everyday'], message: ''},
            {key: 'aviblity', title: 'Times Avaible', type: 'time-checkbox', 
                options: [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
                message: ''},
            {key: 'expertise', title: 'Expertise', type: 'textarea', options: [], message: ''},
            {key: 'expirence', title: 'Expirence', type: 'textarea', options: [], message: ''},
            {key: 'schoolding', title: 'Schooling', type: 'textarea', options: [], message: ''},
            {key: 'education', title: 'Education', type: 'select', options: ['HSStudent', 'HSGrade', 'UStudent', 'ADGrade', 'BDGrade', 'Master', 'PHD', 'Additional'], message: ''},
            {key: 'managementTool', title: 'Tools', type: 'radio', options: ['yes', 'no'], message: 'Do you want to use the CustomMentor suite of relationship management tools?'}
        ]
    }
}

export default class DynamicForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            formValues: {
                areas: [],
                contact_preferance: [],
                aviblity: []
            }
        }
    }

    renderField(item) {
        console.log(this.state)
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
                                    onChange={(event) => {
                                        this.handleChange(item.key, option)
                                    }}
                                    />
                                {' '}
                                {option}
                            </Label>
                        </FormGroup>
                    )
                })
                return (
                    <div>
                        {selections}
                    </div>
                )
            }
            case 'time-checkbox': {
                const selections = []
                _.forOwn(item.options, (option) => {
                    selections.push(     
                        <FormGroup check key={option.day}>
                            <Label check>
                                <Input 
                                    type="checkbox"
                                    name={option.day}
                                    onChange={(event) => {
                                        this.handleChange(item.key, option)
                                    }}
                                    />
                                {' '}
                                {option}
                            </Label>
                            {console.log(this.state.formValues.aviblity, this.state.formValues.aviblity.includes('monday'))}
                            <Input 
                                type="time"
                                name={option.day}
                                onChange={(event) => {
                                    this.handleChangeTime(item.key, option.day, event.target.value)
                                }}
                                />  
                        </FormGroup>
                    )
                })
                return (
                    <div>
                        {selections}
                    </div>
                )
            }
            case 'select': {
                const options = []
                _.forOwn(item.options, (option) => {
                    options.push(<option key={option}>{option}</option>)
                })
                return (
                    <Input 
                        id={item.title}
                        type="select" 
                        name={item.key}
                        onChange={(event) => {
                            this.handleChange(item.key, event.target.value)
                        }}
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
                        onChange={(event) => {
                            this.handleChange(item.key, event.target.value)
                        }}
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

    handleChange(fieldName, value) {
        let formValues = this.state.formValues;
        typeof(formValues[fieldName]) === 'object' ? formValues[fieldName].push(value) : formValues[fieldName] = value 
        this.setState({formValues})
    }
    
    handleChangeTime(fieldName, day, time) {
        let formValues = this.state.formValues;
        let dayTime = {}
        dayTime[day] = time
        formValues[fieldName].push(dayTime)
        this.setState({formValues})
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }
    
    render() {
        return(
            <Form className="container">
                {this.renderGroup(SCHEMA.personality_form)}
				<FormGroup row>
					<Col sm={{size: 10, offset: 2}}>
						<Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
					</Col>
				</FormGroup>
            </Form>
        )
    }
}