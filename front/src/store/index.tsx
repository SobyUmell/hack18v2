import { createStore, combineReducers } from "redux";
import { authReducer } from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer);
