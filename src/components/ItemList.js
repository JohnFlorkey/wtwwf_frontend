import React from "react";
import { Box } from "@mui/material";
import ItemCard from "./ItemCard";

function ItemList({ items, userMediaList = {}, friendGroupID = 0 }) {
  const itemCards = [];
  items.map((item) => {
    const inUserItemList = Boolean(userMediaList[item.id]);
    return itemCards.push(
      <ItemCard
        key={item.id}
        friendGroupID={friendGroupID}
        item={item}
        inUserItemList={inUserItemList}
        isRecommendation
      />
    );
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {itemCards}
    </Box>
  );
}

export default ItemList;
