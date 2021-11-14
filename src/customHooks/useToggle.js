import { useState } from "react";

function useToggle(initialState = false) {
  const [toggle, setToggle] = useState(initialState);

  const flipToggle = () => {
    setToggle(toggle ? false : true);
  };
  return [toggle, flipToggle];
}

export default useToggle;
