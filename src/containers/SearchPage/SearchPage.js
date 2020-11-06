import React from "react";
import "./SearchPage.css";
import SearchPictureComponent from "../../components/SearchPicture/SearchPictureComponent";
const SearchPage = () => {
  return (
    <div className="container">
      <div className="description-box">
        <h1 className="title">Photo search</h1>
      </div>
      <div className="search-container">
        <SearchPictureComponent />
      </div>
    </div>
  );
};

export default SearchPage;
