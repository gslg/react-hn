var React = require('react'),
	ReactDOM = require('react-dom');

var ListComponent = React.createClass({
	render: function(){
		var children = React.Children.map(
			this.props.children,function(child){
				return <li>{child}</li>
			}
		);
		return <ul>{children}</ul>
	}
});

var middleChildren = [
	<strong key="2">Child 2</strong>,
	<a href="#" key="3">Child 3</a>
];

ReactDOM.render(
	<ListComponent>
		<span>Child 1</span>
		{middleChildren}
		<em>Child 4</em>
	</ListComponent>,
	document.getElementById('content')
);