var $ = require('jquery'),
	NewsList = require('./NewsList'),
	React = require('react'),
	ReactDOM = require('react-dom');
$.ajax({
	url: '/json/items.json'
}).then(function(items){
	ReactDOM.render(
		<NewsList items={items}/>,
		$('#content')[0]
	);
});
