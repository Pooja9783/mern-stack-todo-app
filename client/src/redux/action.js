import axios from "axios";
import {
  ADDNEW_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPADTE_TODO,
  DELETE_TODO,
  TOGGLE_TAB,
} from "./actionType";


export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`https://todo-application-mqi2.onrender.com/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo API", error.message);
  }
};

export const getTodo = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://todo-application-mqi2.onrender.com/todos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getTodo API", error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://todo-application-mqi2.onrender.com/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getTodo API", error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`https://todo-application-mqi2.onrender.com/todos/${id}`, { data });
    dispatch({ type: UPADTE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling  update Todo API", error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`https://todo-application-mqi2.onrender.com/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling delete todo API", error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};
