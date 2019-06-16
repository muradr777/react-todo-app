import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTodo, completeTodo } from "../actions/todoActions";

class Todo extends Component {
  onDeleteClick = id => {
    return this.props.deleteTodo(id);
  };

  onCompleteClick = id => {
    return this.props.completeTodo(id);
  };

  render() {
    const { id, completed, title } = this.props.todo;
    return (
      <li className={completed ? "completed" : ""}>
        <span onClick={this.onCompleteClick.bind(this, id)}>{title}</span>
        <i
          className="fas fa-times"
          onClick={this.onDeleteClick.bind(this, id)}
        />
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTodo, completeTodo }
)(Todo);
