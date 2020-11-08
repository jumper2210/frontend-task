import React, { useState, useEffect } from "react"
import SearchPictureComponent from "../../components/SearchPicture/SearchPictureComponent"
import "./ResultsPage.css"
import { useSelector } from "react-redux"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import Modal from "../../components/UI/Modal/Modal"
import ImageDetails from "../../components/ImageDetails/ImageDetails"
import * as imageActions from "../../store/image-action"
import { useDispatch } from "react-redux"

const ResultsPage = (props) => {
  const [isShowDetails, setIsShowDetails] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const imagesData = useSelector((state) => state.imagesData)
  const dispatch = useDispatch()

  if (imagesData) {
    console.log(imagesData)
  }

  const cancelShowDetailsHandler = () => {
    setIsShowDetails(false)
  }

  useEffect(() => {
    if (isLoading === true) {
      setIsShowDetails(true)
    }
    setIsLoading(false)
  }, [isLoading])

  let display = null

  if (isShowDetails === true) {
    display = (
      <Modal show={isShowDetails} modalClose={cancelShowDetailsHandler}>
        <ImageDetails />
      </Modal>
    )
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
            onClick={() => {
              setIsShowDetails(true)
              dispatch(
                imageActions.setDetails(picture.user, picture.urls.regular)
              )
            }}
          />
        ))}
        {isShowDetails === true ? display : null}
      </div>
    </div>
  )
}
export default ResultsPage
