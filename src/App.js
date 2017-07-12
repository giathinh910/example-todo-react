import React, { Component } from 'react';
import TodoList from './container/TodoList';
import TodoCreationForm from './container/TodoCreationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList/>
        <TodoCreationForm/>
      </div>
    );
  }
}

export default App;
