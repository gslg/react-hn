var React = require('react'),
	ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function(){
		return (
			<div>
				<p>{'First·Second'}</p>
				<div>{'First \u00b7 Second'}</div>
				<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
				<p>Hello World!{' '+this.props.date.toTimeString()}</p> 
			</div>
		);
	}
});

setInterval(function(){
	ReactDOM.render(
          <HelloWorld date={new Date()}/>,
          document.getElementById('content')
	);
}
	, 
1000);