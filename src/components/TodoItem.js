import React from 'react';

export class TodoItem extends React.Component {
  handleStatusChange = (event) => {
    let todo = this.props.todo;
    todo.status = event.target.value;
    this.props.changeTodoStatusCallback(todo);
  };

  handleRemoveButtonClick = () => {
    this.props.removeTodoCallback(this.props.todo);
  };

  render() {
    let desc = '';
    if (this.props.todo.desc)
      desc = <span>: {this.props.todo.desc}</span>;
    let todoStyle = {};
    switch (this.props.todo.status) {
      case 'doing':
        todoStyle.color = 'blue';
        break;
      case 'done':
        todoStyle.color = 'green';
        break;
      default:
        break;
    }
    return (
      <li style={todoStyle}>
        <strong>{this.props.todo.title}</strong>{desc}
        <select value={this.props.todo.status} onChange={this.handleStatusChange}>
          <option value="todo">To-do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button onClick={this.handleRemoveButtonClick} href="#remove">Remove</button>
      </li>
    )
  }
}