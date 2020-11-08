import React from "react"
import "./ImageDetailsComponent.css"
import { useSelector } from "react-redux"

const ImageDetailsComponent = (props) => {
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

export default ImageDetailsComponent
