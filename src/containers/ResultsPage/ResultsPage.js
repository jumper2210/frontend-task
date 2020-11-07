import React from "react";
import SearchPictureComponent from "../../components/SearchPicture/SearchPictureComponent";
import "./ResultsPage.css";
import { useSelector } from "react-redux";

const ResultsPage = (props) => {
  const imagesData = useSelector((state) => state.imagesData);
  if (imagesData) {
    console.log(imagesData);
  }
  return (
    <div className="ResultsPage">
      <div className="SearchPictureComponent">
        <SearchPictureComponent />
      </div>
      <div className="title">Title</div>
      <div className="pictures">pictures</div>
    </div>
  );
};
export default ResultsPage;
