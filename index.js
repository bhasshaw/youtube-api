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
	$('.js-search-results').empty();
	$.each(info, function(index, value){
      let html = `
      		<div class="video-template">
        	<a href='https://www.youtube.com/watch?v=${value.id.videoId}' target='_blank'>
	  		   <img role="presentation" src= ${value.snippet.thumbnails.medium.url} alt="images of what you searched for">
        	</a>
        	</div>`
        $('.js-search-results').append(html);
	  	$('.js-query').val('');
	 	});
}

$(handleSubmitButton);
