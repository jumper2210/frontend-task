import { UNSPLASH_KEY } from "../env";
import Unsplash, { toJson } from "unsplash-js";
export const SEARCH_BY_KEYWORD = "SEARCH_BY_KEYWORD";

export const searchByKeyword = (keyword) => {
  const unsplash = new Unsplash({
    accessKey: UNSPLASH_KEY,
  });
  return async (dispatch) => {
    unsplash.search
      .collections(keyword)
      .then(toJson)
      .then((json) => {
        dispatch({ type: SEARCH_BY_KEYWORD, imagesData: json.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
