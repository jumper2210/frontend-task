import { SEARCH_BY_KEYWORD, SET_DETAILS } from "./image-action"
import ImagesDetailsModel from "../helpers/ImageDetailsModel"

const initialValue = {
  imagesData: [],
  details: [],
}

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case SEARCH_BY_KEYWORD:
      return {
        ...state,
        imagesData: action.imagesData,
      }
    case SET_DETAILS:
      const newImageDetails = new ImagesDetailsModel(
        action.details.userInfo,
        action.details.imageUrl
      )
      return {
        ...state,
        details: state.details.concat(newImageDetails),
      }
    default:
      return state
  }
}

export default reducer
