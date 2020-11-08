import React from "react"
import "./ImageDetails.css"
import { useSelector } from "react-redux"

const ImageDetails = (props) => {
  const details = useSelector((state) => state.details)
  console.log(details[0].imageUrl)
  return (
    <>
      <div className="ImageDetails">
        <div>{details.imageUrl}</div>
      </div>
    </>
  )
}

export default ImageDetails
