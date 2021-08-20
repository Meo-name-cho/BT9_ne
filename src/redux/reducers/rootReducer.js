import { combineReducers } from "redux";
import usersReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  data: usersReducer,
});

export default rootReducer;
