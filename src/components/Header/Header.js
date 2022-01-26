import { ThemeProvider } from "@emotion/react";
import { createTheme, MenuItem, TextField } from "@mui/material";
import React from "react";
import "./Header.css";
import countries from "../../data/category";

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" :"#fff",
      },
      mode: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (langauge) => {
    setCategory(langauge);
    setWord("");
  };

  const handleWordChange = (e) => {
    setWord(e.target.value)
  }

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Book"}</span>
      <div className="input">
        <ThemeProvider theme={darkTheme}>
          
          <TextField
            label="Search a Word"
            className="search"
            variant="standard"
            value={word}
            onChange={(e) => handleWordChange(e)}
          />

          <TextField
            select
            className="select"
            label="Languge"
            variant="standard"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            helperText="select your langauge"
          >
            {countries.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
