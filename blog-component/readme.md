# NEWS & EVENTS COMPONENT
Users can access *Custom Mentor* **blog** and **event** postings as well as **news** articles relevant to their interests from an external source.

Users with proper authorization are able to **compose** new posts.

### How to run the prototype:
`git pull origin news-feed`

`git checkout news-feed`

`cd blog-component`

`npm install`

`mongod` - starts local MongoDB instance

`npm start` - component is available at http://localhost:3000/

### Sub Components:
1. Blog/Events page
2. News Feed
3. Blog Composer
4. Nav (between sub components)

## Blog/Events Page
#### All Blog/event posts are served as json responses from backend db
Mongo used for quick prototype - could easily integrate with current backend

JSON response:
```json
{
	"blogs": [
    	{
        	"title": "String",
            "date": "DateString",
            "content": "HTML String"
        }
    ]
}
```

#### JSON response is rendered client-side
Using jQuery/AJAX for prototype but this could easily be rendered in React/Axios

The posts are ordered by date (most recent first)

The blog components take advantage of the Bootstrap Card:
* Card Header - Post title and date + Button to show rest of post
* Card Body - HTML Body of card (hidden until 'show more' button clicked)
* Card Footer - Placeholder links for social media interaction

## News Page
Display news articles based on user search term.

Prototyped using *The Guardian* API as a news source. There are many options available for news sources. Reddit (for its broad range of topics and ease of access) and RSS were also considered for this prototype.

News links are rendered with jQuery in the prototype but this could easily be transferred to React

When page is loaded, 75 of the most recent articles from The Guardian are added to the page.

On search, 200 articles are loaded as a URL paramter for the API call. This could be changed to any number but was done so to limit the amount of API calls being made.

When user scrolls to bottom of the page after a search has been made, the API call is made again and the page number of the results increases by 1 each time so content can keep being loading.

## Composer Page
This page is for users who are authorized to create new posts that will appear on the Blogs/Events Page.

On the frontend: 
* A text editor is displayed using [QuillJS](https://quilljs.com/) via CDN (handles conversion from text in editor to HTML)
* A field for the user to enter a post title
* A submit button

The *submit button* sends JSON post data to backend DB and redirects to the blog/events page.

Post JSON format:
```json
	{
    	"title": "String",
        "content": "HTML String"
    }
```

On the backend:
* Receive a new post JSON
* Add the post to the DB (with Mongoose for prototype)
