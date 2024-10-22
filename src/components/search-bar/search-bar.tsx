"use client";
import useSearchUsers from "@/hooks/use-search-users";
import { Button, TextField } from "@mui/material";

const SearchBar = () => {
  const { data } = useSearchUsers("test");

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
