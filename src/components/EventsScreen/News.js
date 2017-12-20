import React, {Component} from "react"
import NewsArticle from './NewsArticle'
import axios from 'axios'
// import * as pCensor from 'profanity-censor'

//configure dictionary array for blacklist words
//NOTE: if dictionary is used, it replaces default list
// let dictionary = ['example', 'test', 'bad']
// pCensor.use(dictionary)

export default class News extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			after:''}
		this.grabPosts = this.grabPosts.bind(this)
	}
	componentDidMount() {
		this.grabPosts()

		//listener on scroll calls grabPosts() again
	}

		grabPosts(){
			let subreddits =
			[
				'programming',
				'ted',
				'tutorials',
				'languagelearning',
				'howto',
				'lectures',
				'teachingresources',
				'opened',
				'science',
				'history',
				'philosophy',
				'economics',
				'psychology',
				'literature',
				'math',
				'physics',
				'linguistics',
				'chemistry',
				'statistics',
				'meditation',
			 	'fitness',
			 	'cooking',
			 	'running',
			 	'yoga',
			 	'documentaries',
			 	'investing',
			 	'stockmarket',
			 	'business',
			 	'startups',
			 	'marketing',
			 	'law',
			 	'compsci',
			 	'learnprogramming',
			 	'design'
			]
			axios.get(`https://www.reddit.com/r/${subreddits.join('+')}/.json?after=${this.state.after}`)
			.then(data => {
				data.data.data.children.forEach(element => {
					//censor profanity from title
					// element.data.title = pCensor.filter(element.data.title)
				})
				this.setState({after:data.data.data.after})
				let results = this.state.searchResults
				results.push(...data.data.data.children)
				this.setState({searchResults : results})
			})
		}
    render() {

        return (
        	<div>
	        	<form className="form-inline" id="search-bar" action>
	    	        <input className="form-control" name="query" type="text" />
	    	        <input className="btn btn-primary ml-3" type="submit" />
	        	</form>

	        	<div id="news-feed" className=''>
	        		{this.state.searchResults.map((data, i) =>(
	        			<NewsArticle key={i} articleData={data.data}></NewsArticle>
	        		))}
	        		<button className='btn btn-primary mx-auto' onClick={this.grabPosts}>Load More</button>
	        	</div>

        	</div>

        )
    }
}
