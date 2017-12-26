import React from 'react'

const NewsArticle = ({ articleData }) => (
	<div className="card">
		<a href={articleData.url} target="_blank">
			<h3 className="card-header">{articleData.title}</h3>
		</a>
			<h5 className="news-section">
				Subreddit: <a target="_blank" href={"https://www.reddit.com/r/" + articleData.subreddit}>{articleData.subreddit}</a>
			</h5>
	</div>
)

export default NewsArticle