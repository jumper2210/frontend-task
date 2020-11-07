import React from "react";
import SearchPictureComponent from "../../components/SearchPicture/SearchPictureComponent";
import "./ResultsPage.css";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ResultsPage = (props) => {
  const imagesData = useSelector((state) => state.imagesData);
  if (imagesData) {
    console.log(imagesData);
  }
  return (
    <div className="ResultsPage">
      <div className="SearchPictureComponent">
        <div className="SearchPictureComponent--item">
          <SearchPictureComponent />
        </div>
      </div>
      <div className="title">Title</div>
      <div className="container">
        {imagesData.map((picture) => (
          <LazyLoadImage
            effect="blur"
            className="picture"
            alt={picture.alt_description}
            src={picture.urls.regular}
            key={picture.id}
          />
        ))}
      </div>
    </div>
  );
};
export default ResultsPage;
