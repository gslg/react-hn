var $ = require('jquery'),
	NewsHeader = require('./NewsHeader'),
	React = require('react'),
	ReactDOM = require('react-dom');


ReactDOM.render(
	<NewsHeader/>,
	$('#content')[0]
);