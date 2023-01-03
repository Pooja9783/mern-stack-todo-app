import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/action";
const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  const onInputCHange = (e) => {
    // console.log(e);
    setText(e.target.value);
  };
  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter Todo..."
          onChange={onInputCHange}
          className="input"
          value={text}
        />
      </form>
    </div>
  );
};

export default TodoForm;
