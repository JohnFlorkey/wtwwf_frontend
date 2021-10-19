import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import root from "./reducers/root";

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk))
);
