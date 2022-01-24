import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Container, Switch } from "@mui/material";
import Header from "./components/Header/Header";
import Definition from "./components/Definition/Definition";

function App() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [meanings, setMeanings] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  const dictionaryApi = async () => {
    // inital state []
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "#fff" : "#282a32",
        color: lightMode ? "black" : "white",
        transition: "all 0.3s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 15, padding: 8 }}>
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <Switch
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>

        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {meanings && (
          <Definition
            word={word}
            meanings={meanings}
            category={category}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
