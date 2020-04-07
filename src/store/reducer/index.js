import { createStore, applyMiddleware } from "redux";
import thunk from "../middlewares/thunk";

const initialValue = {
  listPost: [],
  listUser: [],
  detailPost: {},
};

function reducer(state = initialValue, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, listPost: action.posts };
    case "FETCH_USERS":
      return { ...state, listUser: action.users };
    case "FETCH_DETAIL":
      return { ...state, detailPost: action.detail };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
