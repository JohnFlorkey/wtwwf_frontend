import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import useForm from "../customHooks/useForm";

function ItemFilter({ items, userMediaList = [], friendGroupID = 0 }) {
  const INTITIAL_FORM_STATE = { term: "" };
  const [formData, addFormData, clearFormData] = useForm(INTITIAL_FORM_STATE);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFormChange = (evt) => {
    const { name, value } = evt.target;
    addFormData(name, value);
  };

  const handleClearForm = (evt) => {
    clearFormData(INTITIAL_FORM_STATE);
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
          ) ||
          i.watchProviders.buyWatchProviders.some((w) =>
            w.providerName.toLowerCase().includes(formData.term.toLowerCase())
          ) ||
          i.watchProviders.rentWatchProviders.some((w) =>
            w.providerName.toLowerCase().includes(formData.term.toLowerCase())
          ) ||
          i.watchProviders.flatrateWatchProviders.some((w) =>
            w.providerName.toLowerCase().includes(formData.term.toLowerCase())
          )
      )
    );
  }, [formData, items]);

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridAutoColumns: "1fr",
          p: 2,
          borderRadius: 5,
        }}
      >
        <TextField
          id="filter-media"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClearForm}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Filter by title, genre, keyword, overview, or watch provider"
          name="term"
          onChange={handleFormChange}
          sx={{ backgroundColor: "#fff" }}
          value={formData.term}
        />
      </Box>

      <ItemList
        items={filteredItems}
        userMediaList={userMediaList}
        friendGroupID={friendGroupID}
      />
    </Box>
  );
}

export default ItemFilter;
