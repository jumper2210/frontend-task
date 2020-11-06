import React, { useState, useEffect } from "react";
import "./SearchPictureComponent.css";
import Unsplash, { toJson } from "unsplash-js";
import { UNSPLASH_KEY } from "../../env";
import ResultsComponent from "../../components/Results/ResultsComponent";

const SearchPictureComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const unsplash = new Unsplash({
    accessKey: UNSPLASH_KEY,
  });
  const searchResults = async () => {
    try {
      unsplash.search
        .photos(query)
        .then(toJson)
        .then(({ results }) => {
          setResults(results);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (query.length >= 3) {
      searchResults();
    }
  }, [query]);

  return (
    <>
      <form className="form">
        <input
          type="search"
          name="suggestionsQuery"
          autoComplete="off"
          className="input"
          aria-autocomplete="list"
          value={query}
          placeholder={`enter some value`}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        {results.length >= 3 ? <ResultsComponent results={results} /> : null}
      </form>
    </>
  );
};
export default SearchPictureComponent;
