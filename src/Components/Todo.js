import React from "react";

const Todo = props => {
  const { id, completed, title, handleClick } = props;
  return (
    <li
      onClick={handleClick.bind(this, id)}
      className={completed ? "completed" : ""}
    >
      {title}
    </li>
  );
};

export default Todo;
