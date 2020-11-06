import React from "react";
import "./HintsComponent.css";
const HintsComponent = (props) => {
  const { history } = props;
  const switchPageHandler = () => {
    history.push("/results");
  };
  const { results, query } = props;
  const hints = results
    .filter((results) => results.title.indexOf(query) > -1)
    .map((rs) => {
      return (
        <li
          onClick={() => {
            switchPageHandler();
          }}
          key={rs.id}
        >
          {rs.title} {rs.total_photos}
        </li>
      );
    });
  return <>{hints}</>;
};

export default HintsComponent;
