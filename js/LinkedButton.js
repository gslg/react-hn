var React = require('react'),
	ReactDOM = require('react-dom');

var LinkedButton = React.createClass({

	getInitialState: function(){
		return {isLike:false};
	},
	handleClick: function(){
		this.setState({isLike:!this.state.isLike},function(){
			alert(this.state.isLike);
		});
	},
	render:function(){
		return <button onClick={this.handleClick}>{this.state.isLike ? 'Like' : 'Don\'t like'}</button>;
	} 
});

ReactDOM.render(
	<LinkedButton/>,
	document.getElementById('content')
);