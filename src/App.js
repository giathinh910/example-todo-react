import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { TodoList } from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>Todo</h1>
          <TodoList/>
        </div>
      </div>
    );
  }
}

export default App;
