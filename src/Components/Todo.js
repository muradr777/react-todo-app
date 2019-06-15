import React from "react";

const Todo = props => {
  const { id, completed, title, handleClick, handleDelete } = props;
  return (
    <li className={completed ? "completed" : ""}>
      <span onClick={handleClick.bind(this, id)}>{title}</span>
      <i className="fas fa-times" onClick={handleDelete.bind(this, id)} />
    </li>
  );
};

export default Todo;
