var React = require('react'),
    ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  
  handleClick: function(){
    if(this.myTextInput !== null) {
      this.myTextInput.focus();
    }
  },
  render: function(){
    return (
      <div>
        <input type="text" ref={//function(ref){
          //ref = input DOM 将其赋给组件的myTextInput
          //return this.myTextInput = ref;
       // }.bind(this)
        //上面必须通过bind（this）将组件引用传递进去。否则function内部的this==window
        (ref) => this.myTextInput = ref;
      }/>
        <input type="button" value="Foucus the text input" onClick={this.handleClick}/>
      </div>
    );
  }
});

module.exports = MyComponent;