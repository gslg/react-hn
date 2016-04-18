var React = require('react'),
    ReactDOM = require('react-dom');
var ListItem = react.createClass({
  render: function(){
    return <li>{this.props.data.text}</li>;
  }
});

var MyComponent = react.createClass({
  render: function(){
    return (
      <ul>{
        this.props.results.map(function(result){
          return <ListItem key={result.id} data={result}></ListItem>;
        })
      }
      </ul>
    );
  }
});