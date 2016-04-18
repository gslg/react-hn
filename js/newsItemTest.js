var $ = require('jquery'),
	NewsItem = require('./NewsItem'),
	React = require('react'),
	ReactDOM = require('react-dom');
	
$.ajax({
	url:'/json/items.json'
}).then(
	function(items){
		console.log('items',items);
		
		ReactDOM.render(<NewsItem item = {items[0]} rank={1}/>,$('#content')[0]);
	}
);