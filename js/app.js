var _ = require('lodash'),
	$ = require('jquery'),
	NewsList = require('./NewsList'),
	React = require('react'),
	ReactDOM = require('react-dom');

$.ajax({
	url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
	dataType: 'json'
}).then(function(stories){

	var detailDeferreds = _(stories.slice(0, 30)).map(function(itemId) {
		return $.ajax({
			  url: 'https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json',
              dataType: 'json'
		});
	}).value();

	return $.when.apply($,detailDeferreds);
}).then(function(){
	var items = _(arguments).map(function(argument){
		return argument[0];
	}).value();

	ReactDOM.render(
		<NewsList items={items}/>,
		$('#content')[0]
	);
});