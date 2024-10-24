import { useState, FormEvent } from "react";
import { InputAdornment, TextField } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Button from "../button";

type SearchBarProps = {
  isLoading?: boolean;
  onClick: (nextValue: string) => void;
};

const SearchBar = ({ isLoading, onClick }: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState("");

  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    onClick(internalValue);
  };

  return (
    <form
      className="flex flex-col items-center md:flex-row"
      onSubmit={handleClick}
    >
      <TextField
        fullWidth
        value={internalValue}
        onChange={(event) => setInternalValue(event.target.value)}
        id="filled-basic"
        placeholder="Enter username"
        variant="outlined"
        slotProps={{
          input: {
            className: "md:h-9",
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <Button
        type="submit"
        className="mt-4 w-full md:w-60 md:mt-0 md:ml-4 md:h-9"
        variant="contained"
        isLoading={isLoading}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
