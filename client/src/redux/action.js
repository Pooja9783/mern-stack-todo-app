import axios from "axios";
import {
  ADDNEW_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPADTE_TODO,
  DELETE_TODO,
  TOGGLE_TAB,
} from "./actionType";

const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo API", error.message);
  }
};

export const getTodo = () => async (dispatch) => {
  try {
    const res = await axios.get(`/todos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getTodo API", error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getTodo API", error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`/todos/${id}`, { data });
    dispatch({ type: UPADTE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling  update Todo API", error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling delete todo API", error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};
