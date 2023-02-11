import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import root from "./reducers/root";

// const composeEnhancers = composeWithDevTools({
//   realtime: true,
//   name: "Your Instance Name",
//   hostname: "localhost",
//   port: 3000, // the port your remotedev server is running at
// });

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk))
  // composeEnhancers(composeWithDevTools(applyMiddleware(thunk)))
);
