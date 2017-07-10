import React from 'react';
import { TodoCreationForm } from './TodoCreationForm';
import { TodoItem } from "./TodoItem";
import _ from "lodash";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          title: 'learning react',
          desc: 'quick start',
          status: 'doing',
          createdAt: new Date().getTime()
        },
        {
          title: 'create a react app',
          desc: 'maybe a simple todo app',
          status: 'todo',
          createdAt: new Date().getTime()
        }
      ]
    }
  }

  createTodo = (newTodo) => {
    let todos = this.state.todos;
    todos.unshift(newTodo);
    this.setState({
      todos: todos
    })
  };

  removeTodo = (todoWhichisRemoved) => {
    let todoIndex = _.findIndex(this.state.todos, (todo) => {
      return todo.createdAt === todoWhichisRemoved.createdAt;
    });
    let todos = this.state.todos;
    todos.splice(todoIndex, 1);
    this.setState({
      todos: todos
    })
  };

  todoIsChangedStatus = (todoWhichChangedStatus) => {
    let todoIndex = _.findIndex(this.state.todos, (todo) => {
      return todo.createdAt === todoWhichChangedStatus.createdAt;
    });
    let todos = this.state.todos;
    todos[todoIndex].status = todoWhichChangedStatus.status;
    this.setState({
      todos: todos
    })
  };

  render() {
    return (
      <div className="Todo-list">
        <h2>Todo List</h2>
        <ul>
          {this.state.todos.map((todo) =>
            <TodoItem key={JSON.stringify(todo)}
                      todo={todo}
                      changeTodoStatusCallback={this.todoIsChangedStatus}
                      removeTodoCallback={this.removeTodo}/>
          )}
        </ul>
        <TodoCreationForm submitTodoCallback={this.createTodo}/>
      </div>
    );
  }
}