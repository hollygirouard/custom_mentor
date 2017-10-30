$( document ).ready(function() {
    console.log( "ready!" );

	// Prevents enter key from refreshing the page
	$('#search-bar').submit(function() {
		event.preventDefault();
		let searchQuery = $('input[name="query"]').val();
		console.log(searchQuery);
		let URL = "https://www.reddit.com/r/" + searchQuery + ".json";
		$.get(URL).done(function(data) {
			let newsData = data.data.children;
			console.log(newsData);
			for (let i = 0; i < newsData.length; i++) {
				$('#news-feed').append(('<div class="card">'+ '<a href="' + newsData[i].data.url + '">' + newsData[i].data.title + '</a>' + '</div>'));
			}
		});
	});
	
});