import React from "react"
import "./ImageDetailsComponent.css"
import { useSelector } from "react-redux"

const ImageDetailsComponent = () => {
  const details = useSelector((state) => state.details)
  const username = details[0].userInfo.username
  const imageUrl = details[0].imageUrl
  const location = details[0].userInfo.location
  return (
    <>
      <p className="Username">{username > 0 ? username : <p>No data</p>}</p>
      <div>
        <img alt="img" src={imageUrl} className="img" />
      </div>
      <p className="Location">{location ? location : <p>No data</p>}</p>
    </>
  )
}

export default ImageDetailsComponent
