import { TOGGLE_TAB, ALL_TODOS } from "./actionType";

export const tabReducer = (state = ALL_TODOS, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return action.selected;
    default:
      return state;
  }
};
