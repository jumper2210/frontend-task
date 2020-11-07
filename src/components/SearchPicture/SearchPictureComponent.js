import React, { useState, useEffect } from "react";
import "./SearchPictureComponent.css";
import Unsplash, { toJson } from "unsplash-js";
import { UNSPLASH_KEY } from "../../env";
import HintsComponent from "../Hints/HintsComponent";

const SearchPictureComponent = (props) => {
  const { history } = props;
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const unsplash = new Unsplash({
    accessKey: UNSPLASH_KEY,
  });
  const searchResults = () => {
    unsplash.search
      .collections(query)
      .then(toJson)
      .then((json) => {
        setResults(json.results);
      });
  };

  useEffect(() => {
    if (query.length >= 3) {
      searchResults();
    }
  }, [query]);

  return (
    <div className="results-container">
      <ul role="listbox">
        <input
          type="search"
          name="suggestionsQuery"
          autoComplete="off"
          className="input"
          aria-autocomplete="list"
          value={query}
          placeholder={``}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <HintsComponent history={history} query={query} results={results} />
      </ul>
    </div>
  );
};
export default SearchPictureComponent;
