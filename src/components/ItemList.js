import React from "react";
import { Box } from "@mui/material";
import ItemCard from "./ItemCard";

function ItemList({ items }) {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default ItemList;
