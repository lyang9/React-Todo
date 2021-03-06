import React from 'react';

import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: ''
    };
  };

  // property
  addTodo = event => {
    event.preventDefault(); // prevent from refreshing everytime you click 'Add Todo'
    if (this.state.inputText) {
      this.setState({
        todos: [...this.state.todos, this.state.inputText],
        inputText: ''
      });
    }
  }


  // updates inputText
  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };


  render() {
    return (
      <div>
        <h2>TO DO</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  };
};

export default App;
