import React from 'react';

export class TodoCreationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: '',
      status: 'todo'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    let newTodo = this.state;
    newTodo.createdAt = new Date().getTime();
    this.props.submitTodoCallback(newTodo);
    this.setState({
      title: '',
      desc: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Title"
               value={this.state.title}
               onChange={this.handleChange}/>
        <input type="text" name="desc" placeholder="Description"
               value={this.state.desc}
               onChange={this.handleChange}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}