// src/components/SearchField.tsx
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: { [key: string]: any };
}

const SearchField: React.FC<SearchFieldProps> = ({ value, onChange, sx }) => {
  return (
    <TextField
      fullWidth
      placeholder="Search Anime..."
      variant="outlined"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={sx}
    />
  );
};

export default SearchField;
