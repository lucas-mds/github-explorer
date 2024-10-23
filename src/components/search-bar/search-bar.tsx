import { useState } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

type SearchBarProps = {
  onClick: (nextValue: string) => void;
};

const SearchBar = ({ onClick }: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState("");

  return (
    <div className="flex flex-col items-center">
      <TextField
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
        onClick={() => onClick(internalValue)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
