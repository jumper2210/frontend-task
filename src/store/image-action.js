import { UNSPLASH_KEY } from "../env"
import Unsplash, { toJson } from "unsplash-js"

export const RESET_DETAILS = "RESET_DETAILS"
export const SEARCH_BY_KEYWORD = "SEARCH_BY_KEYWORD"
export const SET_DETAILS = "SET_DETAILS"

export const searchByKeyword = (keyword) => {
  const unsplash = new Unsplash({
    accessKey: UNSPLASH_KEY,
  })
  return async (dispatch) => {
    unsplash.search
      .photos(keyword)
      .then(toJson)
      .then((json) => {
        dispatch({ type: SEARCH_BY_KEYWORD, imagesData: json.results })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const setDetails = (userInfo, imageUrl) => {
  return async (dispatch) => {
    dispatch({
      type: SET_DETAILS,
      details: {
        userInfo: userInfo,
        imageUrl: imageUrl,
      },
    })
  }
}
export const resetDetails = () => {
  return async (dispatch) => {
    dispatch({
      type: RESET_DETAILS,
    })
  }
}
