import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import useForm from "../customHooks/useForm";

function ItemFilter({ items, userMediaList = [], friendGroupID = 0 }) {
  const INTITIAL_FORM_STATE = { term: "" };
  const [formData, addFormData] = useForm(INTITIAL_FORM_STATE);
  const [filteredItems, setFilteredItems] = useState(items);

  const setFormData = (evt) => {
    const { name, value } = evt.target;
    addFormData(name, value);
  };

  useEffect(() => {
    setFilteredItems(
      items.filter(
        (i) =>
          i.title.toLowerCase().includes(formData.term.toLowerCase()) ||
          i.overview.toLowerCase().includes(formData.term.toLowerCase()) ||
          i.genres.some((k) =>
            k.toLowerCase().includes(formData.term.toLowerCase())
          ) ||
          i.keywords.some((k) =>
            k.toLowerCase().includes(formData.term.toLowerCase())
          )
      )
    );
  }, [formData, items]);

  return (
    <Box>
      <TextField
        id="filter-media"
        label="Filter"
        name="term"
        value={formData.value}
        onChange={setFormData}
      />
      <ItemList
        items={filteredItems}
        userMediaList={userMediaList}
        friendGroupID={friendGroupID}
      />
    </Box>
  );
}

export default ItemFilter;
