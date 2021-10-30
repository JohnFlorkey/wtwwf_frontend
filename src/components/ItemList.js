import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { getUserMovies } from "../actions/userMovies";
import ItemCard from "./ItemCard";

function ItemList({ items }) {
  const dispatch = useDispatch();
  const { userMovies } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies());
    }
  }, [dispatch, userMovies]);

  const itemCards = [];
  items.map((item) => {
    let inUserItemList = false;
    if (item.title) {
      inUserItemList = Boolean(userMovies[item.id]);
    }
    return itemCards.push(
      <ItemCard key={item.id} item={item} inUserItemList={inUserItemList} />
    );
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {itemCards}
    </Box>
  );
}

export default ItemList;
