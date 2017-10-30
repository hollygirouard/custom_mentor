const apiKey = "115c5979-da30-4257-b1ec-b3f0156feffa";

$( document ).ready(function() {
    console.log("ready!");
    mostRecent();

  // Global Variables 
    let page = 1;

	// On submit of search bar ajax call is make
	$('#search-bar').submit(function() {
		page = 1;
		event.preventDefault();
		$('#news-feed').empty();
		guardianCall();

		// Loads more articles as the user scrolls down
		$(window).scroll(function() {   
			if($(window).scrollTop() + $(window).height() == $(document).height()) {
				guardianCall();
			}
		});
	});

	// Ajax call for first page of subreddit results
	function guardianCall() {
		let searchQuery = $('input[name="query"]').val();
		let URL = "http://content.guardianapis.com/search?q=" + searchQuery + "&page-size=200&page=" + page + "&api-key=" + apiKey;
		$.get(URL).done(function(data) {
			console.log(URL);
			let newsData = data.response.results;
			console.log(newsData);
			for (let i = 0; i < newsData.length; i++) {
				$('#news-feed').append(('<div class="card">'+ '<a href="' + newsData[i].webUrl + '" target="_blank">' + 
					'<h3 class="card-header">' + newsData[i].webTitle + '</h3>' + '</a>' + 
					'<h5 class="news-section">' + "Section: " + newsData[i].sectionName + '</h5>' + '</div>'));
			}
		});
		page++;
	}

	  // Loads most recent articles as default
  function mostRecent() {
 		 let URL = "http://content.guardianapis.com/search?q&page-size=200&order-by=newest&api-key=115c5979-da30-4257-b1ec-b3f0156feffa";
 		 $.get(URL).done(function(data) {
 		 		let newsData = data.response.results;
 		 		for (let i = 0; i < newsData.length; i++) {
				$('#news-feed').append(('<div class="card">'+ '<a href="' + newsData[i].webUrl + '" target="_blank">' + 
					'<h3 class="card-header">' + newsData[i].webTitle + '</h3>' + '</a>' + 
					'<h5 class="news-section">' + "Section: " + newsData[i].sectionName + '</h5>' + '</div>'));
			}
 		 });
	}

});