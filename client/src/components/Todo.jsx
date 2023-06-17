import React, { useState } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/action";
import { useDispatch } from "react-redux";
const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.data);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEdit((prev) => !prev);
    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li className="task" 
    // onClick={() => dispatch(toggleTodo(todo._id))}
    >
      <span
        style={{
          display: edit ? "none" : "block",
          textDecoration: todo.done ? "line-through" : "",
          color: todo.done ? "black" : "white",
        }}
      >
        {todo.data}
      </span>
      <form
        onSubmit={onFormSubmit}
        style={{ display: edit ? "inline" : "none" }}
      >
        <input
          type="text"
          className="edit-todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className="span-div">
        <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
          Delete
        </span>
        <span
          className="icon"
          onClick={() => setEdit((prevState) => !prevState)}
        >
          {" "}
          Edit
        </span>
      </div>
    </li>
  );
};

export default Todo;
