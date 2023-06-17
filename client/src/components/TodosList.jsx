import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodo, deleteTodo } from "../redux/action";
import { ALL_TODOS, ACTIVE_TODOS } from "./../redux/actionType";

import Todo from "./Todo";
import Tab from "./Tab";

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const currentTab = useSelector((state) => state.currentTab);
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

console.log(todos);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else {
      return todos.filter((todo) => todo.done);
    }
  };

  const removeDoneTodo = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <div>
      <article>
        <div className="tab">
          <Tab currentTab={currentTab} />
          <div>
            {todos?.some((todo) => todo?.done) ? (
              <button onClick={removeDoneTodo} className="btn clear">
                Remove done Todos
              </button>
            ) : null}
          </div>
        </div>
        <ul>
          {getTodos().map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default TodosList;
