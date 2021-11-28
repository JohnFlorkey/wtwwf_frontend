import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Routes from "./Routes";
import { getUser } from "../actions/user";

function App() {
  /**
   * temporary for mocking user state so we can get the user based components created
   */
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      dispatch(getUser(1));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
