import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Button from "../button";

type SearchBarProps = {
  isLoading?: boolean;
  onClick: (nextValue: string) => void;
};

const SearchBar = ({ isLoading, onClick }: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState("");

  const handleClick = () => {
    onClick(internalValue);
  };

  return (
    <div className="flex flex-col items-center">
      <TextField
        fullWidth
        value={internalValue}
        onChange={(event) => setInternalValue(event.target.value)}
        id="filled-basic"
        placeholder="Enter username"
        variant="outlined"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <Button
        className="mt-4"
        fullWidth
        variant="contained"
        onClick={handleClick}
        isLoading={isLoading}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
