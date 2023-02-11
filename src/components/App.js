import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Routes from "./Routes";
import { getUser, updateUser } from "../actions/user";
import auth from "../reducers/auth";

function App() {
  // const { auth } = useSelector((store) => store);
  // useEffect(() => {
  //   if (auth.authToken) {
  //     console.log(auth.authToken);
  //     const id =
  //     //  getUser(authToken.id);
  //   } else {
  //     // updateUser({});
  //   }
  // }, [auth]);

  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
