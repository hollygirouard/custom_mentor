const apiKey = "115c5979-da30-4257-b1ec-b3f0156feffa";

$( document ).ready(function() {
    console.log("ready!");
    redditNews();

  // Global Variables 
    // let page = 1;

	// On submit of search bar ajax call is make
	$('#search-bar').submit(function() {
		// page = 1;
		event.preventDefault();
		$('#news-feed').empty();
		redditSearch();
		// // Loads more articles as the user scrolls down
		// $(window).scroll(function() {   
		// 	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		// 		guardianCall();
		// 	}
		// });
	});


	/////////////////////////////////
	///// Reddit JSON Search ////////
	/////////////////////////////////	

		// Ajax call for first page of subreddit results
	function redditNews() {
		let URL = "https://www.reddit.com/.json";
		$.get(URL).done(function(data) {
			console.log(URL);
			let newsData = data.data.children;
			console.log(newsData);
			for (let i = 0; i < newsData.length; i++) {
				$('#news-feed').append(('<div class="card">'+ '<a href="' + newsData[i].data.url + '" target="_blank">' + 
					'<h3 class="card-header">' + newsData[i].data.title + '</h3>' + '</a>' + 
					'<h5 class="news-section">' + "Subreddit: " + 
					'<a target="_blank" href="https://www.reddit.com/r/' + newsData[i].data.subreddit + '">' + newsData[i].data.subreddit + 
					'</a></h5>' + '</div>'));
			}
		});
	}


	// Ajax call for searching reddit
	function redditSearch() {
		let searchQuery = $('input[name="query"]').val();
		let URL = "https://www.reddit.com/search.json?q=" + searchQuery + "&sort=relevance&t=all";
		$.get(URL).done(function(data) {
			console.log(URL);
			let newsData = data.data.children;
			console.log(newsData);
			for (let i = 0; i < newsData.length; i++) {
				$('#news-feed').append(('<div class="card">'+ '<a href="' + newsData[i].data.url + '" target="_blank">' + 
					'<h3 class="card-header">' + newsData[i].data.title + '</h3>' + '</a>' + 
					'<h5 class="news-section">' + "Subreddit: " + 
					'<a target="_blank" href="https://www.reddit.com/r/' + newsData[i].data.subreddit + '">' + newsData[i].data.subreddit + 
					'</a></h5>' + '</div>'));
			}
		});
	}


	/////////////////////////////////
	///// Guardian API Search ///////
	/////////////////////////////////

	// // Ajax call for The Guardian Search
	// function guardianCall() {
	// 	let searchQuery = $('input[name="query"]').val();
	// 	let URL = "http://content.guardianapis.com/search?q=" + searchQuery + "&page-size=200&page=" + page + "&api-key=" + apiKey;
	// 	$.get(URL).done(function(data) {
	// 		console.log(URL);
	// 		let newsData = data.response.results;
	// 		console.log(newsData);
	// 		for (let i = 0; i < newsData.length; i++) {
	// 			$('#news-feed').append(('<div class="card">'+ '<a href="' + newsData[i].webUrl + '" target="_blank">' + 
	// 				'<h3 class="card-header">' + newsData[i].webTitle + '</h3>' + '</a>' + 
	// 				'<h5 class="news-section">' + "Section: " + newsData[i].sectionName + '</h5>' + '</div>'));
	// 		}
	// 	});
	// 	page++;
	// }

	//   // Loads most recent articles from The Guardian as default
 //  function mostRecent() {
 // 		 let URL = "http://content.guardianapis.com/search?q&page-size=75&order-by=newest&api-key=115c5979-da30-4257-b1ec-b3f0156feffa";
 // 		 $.get(URL).done(function(data) {
 // 		 		let newsData = data.response.results;
 // 		 		for (let i = 0; i < newsData.length; i++) {
	// 			$('#news-feed').append(('<div class="card">'+ '<a href="' + newsData[i].webUrl + '" target="_blank">' + 
	// 				'<h3 class="card-header">' + newsData[i].webTitle + '</h3>' + '</a>' + 
	// 				'<h5 class="news-section">' + "Section: " + newsData[i].sectionName + '</h5>' + '</div>'));
	// 		}
 // 		 });
	// }

});