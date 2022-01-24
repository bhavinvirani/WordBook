import React from "react";
import "./Definition.css";

const Definition = ({ word, meanings, category, lightMode }) => {
  return (
    <div className="meaning">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{
            backgroundColor: lightMode ? "#fff" : "#282a32",
            borderRadius: "5px",
          }}
          controls
        ></audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{
                  background: lightMode ? "#3b5360" : "#F9F6EE",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                {def.example && (
                  <hr style={{ backgroundColor: "black", width: "100%" }} />
                )}
                {def.example && (
                  <span>
                    <b>Example: </b> {def.example}
                  </span>
                )}
                {def.synonyms && def.synonyms.length > 0 && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => ` ${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
