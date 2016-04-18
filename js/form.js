var React = require('react'),
	ReactDOM = require('react-dom');

var ControlledInput = React.createClass({
	getInitialState: function(){
		return {value: 'Hello World!'};
	},
	handleChange: function(e){
		this.setState({
			value: e.target.value
		});
	},
	reset: function(){
		this.setState({
			value: 'Hello World!'
		});
	},
	alertValue: function(){
		alert(this.state.value);
	},
	render: function(){
		return (
			<div>
				<input type="text" value={this.state.value} onChange={this.handleChange}/>
				<button onClick={this.reset}>Reset</button>
				<button onClick={this.alertValue}>Alert</button>
			</div>
		);
	}
});

var UnControlledInput = React.createClass({
	reset: function(){
		this.refs.input.value = "Hello";
	},
	alertValue: function(){
		alert(this.refs.input.value);
	},
	render: function(){
		return (
			<div>
				<input type="text" ref="input" defaultValue="Hello!"/>
				<button onClick={this.reset}>Reset</button>
				<button onClick={this.alertValue}>Alert</button>
			</div>
		);
	}
});

ReactDOM.render(
	<div>
		<ControlledInput/>
		<UnControlledInput/>
	</div>,
	document.getElementById('content')
);