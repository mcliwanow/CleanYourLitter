import { combineReducers } from "redux";
import * as constants from "./constants";

const litterBoxes = (state = [], action) => {
  switch (action.type) {
    case constants.FETCH_LITTER_BOXES_SUCCESS:
      return action.litterBoxes;
    default:
      return state;
  }
};

export default combineReducers({
  litterBoxes
});
