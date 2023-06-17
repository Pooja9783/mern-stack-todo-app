import {
  ADDNEW_TODO,
  TOGGLE_TODO,
  GETALL_TODO,
  UPADTE_TODO,
  DELETE_TODO,
} from "./actionType";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADDNEW_TODO:
      return [action.payload, ...state];
    case GETALL_TODO:
      return action.payload;
    // case TOGGLE_TODO:
    //   return state.map((todo) =>
    //     todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
    //   );
    case UPADTE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload._id);
    default:
      return state;
  }
};
