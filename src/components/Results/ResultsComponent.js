import React from "react";
import "./ResultsComponent.css";
const ResultsComponent = (props) => {
  const { results } = props;
  console.log(results);
  return (
    <div className="results-container">
      <ul role="listbox">
        {results.length > 0
          ? results.map((rs) => {
              return <li key={rs.id}>{rs.id}</li>;
            })
          : "No results"}
      </ul>
    </div>
  );
};

export default ResultsComponent;
