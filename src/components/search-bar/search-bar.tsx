import { Button, TextField } from "@mui/material";
import { useState } from "react";

type SearchBarProps = {
  onClick: (nextValue: string) => void;
};

const SearchBar = ({ onClick }: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState("");

  return (
    <div className="flex items-center">
      <TextField
        value={internalValue}
        onChange={(event) => setInternalValue(event.target.value)}
        id="filled-basic"
        label="Search user name"
        variant="filled"
      />
      <Button
        className="ml-2"
        variant="contained"
        onClick={() => onClick(internalValue)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
