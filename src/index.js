import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAkUloeiyFCaHxzWtbKxiTpZmO4vdXQp2E';

YTSearch({ key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});

// Create a new component. This should produce some HTML

const App = () => {
	return (

	<div>
		<SearchBar />
	</div>

	);
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

