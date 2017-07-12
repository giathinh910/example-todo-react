import React from 'react';
import { TodoItem } from "../components/TodoItem";
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../actions'

class TodoList extends React.Component {
  changeTodoStatus = (todoWhichChangedStatus) => {
    this.props.dispatch(updateTodo(todoWhichChangedStatus))
  };

  removeTodo = (todoWhichIsRemoved) => {
    this.props.dispatch(deleteTodo(todoWhichIsRemoved.createdAt))
  };

  render() {
    return (
      <div className="Todo-list">
        <h2>Todo List</h2>
        <ul>
          {this.props.todos.map((todo) =>
            <TodoItem key={JSON.stringify(todo)}
                      todo={todo}
                      changeTodoStatusCallback={this.changeTodoStatus}
                      removeTodoCallback={this.removeTodo}/>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
};

TodoList = connect(mapStateToProps)(TodoList);

export default TodoList;