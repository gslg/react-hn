var React = require('react'),
    ReactDOM = require('react-dom');

var results=[
      {id:"1",text:"hello1"},
      {id:"2",text:"hello2"},
      {id:"3",text:"hello3"},
      {id:"4",text:"hello4"}];

var ListItemWrapper = React.createClass({
  render: function() {
    return <li>{this.props.data.text}</li>;
  }
});
var MyComponent = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.results.map(function(result) {
           return <ListItemWrapper key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});