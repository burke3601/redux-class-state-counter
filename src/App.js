import React from 'react';
import './App.css';
import Counter from './Counter'

// 1 demonstrate how to convert a fn component to a class
// 2 show how to add state
//3 modify that state using "insance method"
// 
// ? modify both examples to handle multiple counters

// to convert a fn component to a class
// 1. change the words funciton app to render
// 2. wrap the render in a "class app extends react.component"
// 3. 

//how do I manage state in a class?
//1. put 'this.state = {}' in the constructor()


class App extends React.Component{
  // we set up initial state in the constructor()
  constructor(props) { // Component should expect props
    // run the react.component's version of constructor()
    super(props); //"boot up" to work with React's ecosystem

    // set up initial state ! 

    this.state ={
      count: 0
    };

    // two ways to create modifiers
    // as an arrow function class variable
    // as a method you .bind
  }
  // "render" is a built in React method
  // render() is equivalent to a function component.
  render() {
    return (
      <div className="App">
        <h1>Hello React Classes!</h1>
        <Counter 
        count ={this.state.count}
        decrement={this._decrement}
        increment={this._increment}
        
        />
        
      </div>
    );
  }
  //modifier function as an arrow function
  //by using an arrow function assigned to a variable,
  // the value of the keyword `this` get locked in
  //when you hand off ("pass as an argument") a function
  // the keyword `this` loses its reference
  _increment = () => {
    this.setState({
      count: this.state.count + 1
    }, ()  => {
      console.log(`updated count to ${this.state.count}`)
    })
  }


  _decrement = () => {
    this.setState({
      count: this.state.count - 1
    }, ()  => {
      console.log(`updated count to ${this.state.count}`)
    })
    
  }
}

export default App;
