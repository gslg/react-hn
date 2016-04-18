var $ = require('jquery'),
	React = require('react'),
	_ = require('lodash');			

var NewsHeader = React.createClass({
	getLogo: function(){
		return (
			<div className="newsHeader-logo">
				<a href="https://www.ycombinator.com">
					<img src="../img/y18.gif"/>
				</a>
			</div>
		);
	},
	getTitle: function(){
		return (
			<div className="newsHeader-title">
				<a href="https://news.ycombinator.com" className="newsHeader-textLink">
					Hacker News
				</a>
			</div>
		);
	},
	getNav: function(){
		var navLinks = [
		  {
		  	name: 'new',
		  	url: 'newest'
		  },
		  {
		  	name: 'comments',
		  	url: 'newcomments'
		  },
		  {
		  	name: 'show',
		  	url: 'show'
		  },
		  {
		  	name: 'ask',
		  	url: 'ask'
		  },
		  {
		  	name: 'jobs',
		  	url: 'jobs'
		  },
		  {
		  	name: 'submit',
		  	url: 'submit'
		  }
		];

		return (
			<div className="newsHeader-nav">
				{
					_(navLinks).map(function(navLink){
						return (
							<a href={'https://news.ycombinator.com/' + navLink.url} 
							   className="newsHeader-navLink newsHeader-textLink"
							   key={navLink.url}>{navLink.name}</a>
						);
					}).value()
				}
			</div>
		)
	},
	getLogin: function(){
		return (
			<div className="newsHeader-login">
				<a href="https://news.ycombinator.com/login?whence=news" 
				   className="newsHeader-textLink">
				   Login
				</a>
			</div>
		);
	},
	render: function(){
		return (
			<div className="newsHeader">
				{this.getLogo()}
				{this.getTitle()}
				{this.getNav()}
				{this.getLogin()}
			</div>
		);
	}
});

module.exports = NewsHeader;