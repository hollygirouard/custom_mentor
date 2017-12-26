import React, {Component} from "react"
//use either quill | draft | other RTE for this component.


export default class Events extends Component {
		constructor(props){
			super(props)
 			
    }

		componentDidMount(){
			
		}

    render() {
        let user = this.props.currentUser
        return (
		            <div className="container">
	                <h2 className="text-center">Post a new blog</h2>
	        				<div className="alertcontainer"></div>
        					<form>
            				<input id='blog-title' type="text" placeholder="Title" required className='form-control-lg form-control'/>
            				{/*Create the editor container 
											ADD THE RTE HERE
            				*/}
            				<input className='btn btn-success' value="Post blog"/>
       						 </form>
	            	</div>
        			 )	
    }
}
