import React from "react";
import "./SearchPage.css";
import SearchPictureComponent from "../../components/SearchPicture/SearchPictureComponent";
const SearchPage = (props) => {
  const { history } = props;
  return (
    <div className="container">
      <div className="description-box">
        <h1 className="title">Photo search</h1>
      </div>
      <div className="search-container">
        <SearchPictureComponent history={history} />
      </div>
    </div>
  );
};

export default SearchPage;
