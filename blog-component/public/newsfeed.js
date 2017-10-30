const apiKey = require('../env.js');

$( document ).ready(function() {
    console.log("ready!");

  // Global Variables 
    let count = 25;
    let after;

	// On submit of search bar ajax call is make
	$('#search-bar').submit(function() {
		count = 25;
		after = "";
		event.preventDefault();
		$('#news-feed').empty();
		redditCall();
	});

	// Loads more articles as the user scrolls down
	$(window).scroll(function() {   
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			redditCall();
		}
	});

	// Ajax call for first page of subreddit results
	function redditCall() {
		let searchQuery = $('input[name="query"]').val();
		// let URL = "https://www.reddit.com/r/" + searchQuery + ".json?count=" + count + "&after=" + after;
		let URL = "http://content.guardianapis.com/search?q=" + searchQuery + "&api-key="+ apiKey;
		$.get(URL).done(function(data) {
			console.log(URL);
			let newsData = data.data.children;
			after = data.data.after;
			for (let i = 0; i < newsData.length; i++) {
				$('#news-feed').append(('<div class="card">'+ '<a href="' + newsData[i].data.url + '" target="_blank">' + newsData[i].data.title + '</a>' + '</div>'));
			}
		});
		count+=25;
	}
});