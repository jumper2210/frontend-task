import React from "react"
import "./SearchPage.css"
import SearchPictureComponent from "../../components/SearchPicture/SearchPictureComponent"
import useKey from "../../helpers/hooks/useKey"
const SearchPage = (props) => {
  const { history } = props
  const checkKey = () => {
    console.log("check!")
  }
  useKey("Enter", checkKey)
  return (
    <div className="container">
      <h1 className="title">Photo search</h1>
      <div className="search-container">
        <SearchPictureComponent history={history} />
      </div>
    </div>
  )
}

export default SearchPage
