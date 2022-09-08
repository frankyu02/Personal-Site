import React, { useState } from "react";
import styled from "styled-components";
import { AwesomeButtonProgress } from "react-awesome-button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 25px;
    height: 75%;
    background: var(--button);
    ::placeholder {
      color: var(--button-text);
    }
  }
`;

export default function RecipeSearch({ setRecipe, setError }) {
  const [id, setId] = useState("");
  return (
    <Wrapper>
      <input
        inputmode={"numeric"}
        value={id}
        placeholder={"Enter ID"}
        onChange={(e) => setId(e.target.value)}
      />
      <AwesomeButtonProgress
        type="primary"
        action={(element, next) => {
          setError(false);
          setRecipe(false);
          setId("");
          const url =
            "https://api.spoonacular.com/recipes/" +
            id.toString() +
            "/information?apiKey=3d5ee971653049b698198efc9aaac317";
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              console.log("DATA", data);
              data.status ? setError(true) : setRecipe(data);
              next();
            });
        }}
        loadingLabel="Fetching ..."
        disabled={id == ""}
      >
        Search by ID
      </AwesomeButtonProgress>
    </Wrapper>
  );
}
