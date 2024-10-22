"use client";
import { Button, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <TextField id="filled-basic" label="Search user name" variant="filled" />
      <Button
        className="ml-2"
        variant="contained"
        onClick={() => alert("search")}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
