import React, { Component } from "react";
import axios from "axios";
import uuid from "uuid";

class Todo extends Component {
  state = {
    value: "",
    todos: [
      {
        id: 0,
        completed: false,
        title: "This is first Todo"
      },
      {
        id: 2,
        completed: true,
        title: "This is another item"
      },
      {
        id: 3,
        completed: false,
        title: "You need finaly do this"
      }
    ]
  };

  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
  //     this.setState({ todos: res.data });
  //   });
  // }

  handleSubmit = e => {
    e.preventDefault();
    const { value, todos } = this.state;
    let todo = {
      userId: 1,
      id: uuid(),
      title: value,
      completed: false
    };
    todos.push(todo);
    this.setState({
      value: "",
      todos
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleClick = id => {
    const newTodos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const { value, todos } = this.state;
    return (
      <React.Fragment>
        <h2>Todo List</h2>
        <ol className="o__list">
          {todos.map(todo => (
            <li
              key={uuid()}
              onClick={this.handleClick.bind(this, todo.id)}
              className={todo.completed ? "completed" : ""}
            >
              {todo.title}
            </li>
          ))}
        </ol>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="What you need To do?"
            value={value}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Todo;
