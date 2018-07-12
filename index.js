'strict'

function handleSubmitButton () {
	$('.js-search-form').submit(event => {
		event.preventDefault();
		getApiData();
	});
}

function getApiData () {
	let searchTerm = $('.js-query').val();
	let url = 'https://www.googleapis.com/youtube/v3/search';
	let params = {
      		q: searchTerm,
      		part: 'snippet',
      		key: 'AIzaSyA63a2l7hPQVLJe3J4QmCSIpWDJRYWCPrs',
      		type: 'video',
      		maxResults: 6
    	};

	$.getJSON(url, params, function (data) {
		displayResults(data.items);
	});
}

function displayResults (info) {
	$.each(info, function(index, value){
	  		$('<img>').attr("src", value.snippet.thumbnails.medium.url).appendTo('.js-search-results');
	  		$('.js-query').val('');
	 	});
}

$(handleSubmitButton);
