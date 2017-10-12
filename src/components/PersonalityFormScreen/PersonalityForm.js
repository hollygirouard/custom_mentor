import React, {Component} from "react"
import FormBuilder from './FormBuilder'

const SCHEMA = {
      key: 'personality_form',
      title: 'Personality Form',
      group: [
          {   
              key: 'areas',
              title: 'Mentor Areas', 
              type: 'checkbox', 
              options: ['educational', 'financial', 'physical', 'spiritual', 'other'], 
          },
          {
              key: 'level',
              title: 'Mentoring Level', 
              type: 'select-one', 
              options: ['cheerleader', 'mentor', 'coach', 'tutor'], 
          },
          {
              key: 'contact_preferance',
              title: 'Contact Preferance', 
              type: 'checkbox', 
              options: ['email', 'phone', 'text'], 
          },
          {
              key: 'time_commitment',
              title: 'Time Commitment', 
              type: 'select-one', 
              options: ['once', 'twice', 'three', 'everyday'], 
          },
          {
              key: 'aviblity',
              title: 'Times Avaible', 
              type: 'checkbox', 
              options: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
              inputs: 'renderTime'},
          {
              key: 'expertise', 
              title: 'Expertise', 
              type: 'textarea', 
          },
          {
              key: 'expirence',
              title: 'Expirence', 
              type: 'textarea',
          },
          {
              key: 'schoolding', 
              title: 'Schooling', 
              type: 'textarea', 
          },
          {
              key: 'education',  
              title: 'Education', 
              type: 'select-one', 
              options: ['HSStudent', 'HSGrade', 'UStudent', 'ADGrade', 'BDGrade', 'Master', 'PHD', 'Additional'], 
          },
          {
              key: 'managementTool', 
              title: 'Tools', 
              type: 'radio', 
              options: ['yes', 'no'], 
              message: 'Do you want to use the CustomMentor suite of relationship management tools?'
          }
      ]
}

// ***** EXAMPLE FORM DATA *****
// formValues: {
//   areas: ["educational", "financial", "physical"],
//   aviblity: ["monday", "saturday"], 
//   contact_preferance: ["phone"],
//   education: "PHD",
//   expertise: "Hustle",
//   expirence: "Hustle every day",
//   level: "mentor",
//   managementTool: "on",
//   schoolding: "Hustle acadamy",
//   time_commitment: "two",
//   times: {
//     monday: {timeStart: "12:30", timeEnd: "15:00"},
//     saturday: {timeStart: "09:00", timeEnd: "14:00"}
//   }
// }

export default class PersonalityForm extends Component {
    render() {
      return (
        <FormBuilder schema={SCHEMA} />
      )
    }
}