import { GET_TODOS } from "../actions/types";

const initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      title: "This is first Todo This is first TodoThis is first Todo111"
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

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return { ...state };
    default:
      return state;
  }
}
