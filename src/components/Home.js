import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import UserMovieList from "./UserMovieList";
import UserTVList from "./UserTVList";

function Home() {
  const { user } = useSelector((store) => store);
  return (
    <Box>
      {user ? <UserMovieList /> : null}
      {user ? <UserTVList /> : null}
    </Box>
  );
}

export default Home;
