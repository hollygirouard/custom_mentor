import React, {Component} from "react"
import NewsArticle from './NewsArticle'
import axios from 'axios'

export default class News extends Component {
	constructor(props) {
		super(props);
		this.state = {searchResults: []}
	}

	componentDidMount() {
		axios.get('https://www.reddit.com/.json')
			.then(data => {
				this.setState({searchResults : data.data.data.children})
			})
	}

    render() {

        return (
        	<div>
	        	<form className="form-inline" id="search-bar" action>
	    	        <input className="form-control" name="query" type="text" />
	    	        <input className="btn btn-primary ml-3" type="submit" />
	        	</form>
	        	
	        	<div id="news-feed">
	        		{this.state.searchResults.map((data, i) =>(
	        			<NewsArticle key={i} articleData={data.data}></NewsArticle>
	        		))}
	        	</div>
        	</div>

        )
    }
}
