import React, { Component } from "react";
import uuid from "uuid";

class Todo extends Component {
  state = {
    value: "",
    todos: [
      "This is first Todo",
      "This is another item",
      "You need finaly do this"
    ]
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value, todos } = this.state;
    todos.push(value);
    this.setState({
      ...this.state,
      value: "",
      todos
    });
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      value: e.target.value
    });
  };

  render() {
    const { value, todos } = this.state;
    return (
      <React.Fragment>
        <h2>Todo List</h2>
        <ol className="o__list">
          {todos.map(todo => (
            <li key={uuid()}>{todo}</li>
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
