import { SEARCH_BY_KEYWORD } from "./image-action";

const initialValue = {
  imagesData: [],
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case SEARCH_BY_KEYWORD:
      return {
        ...state,
        imagesData: action.imagesData,
      };
    default:
      return state;
  }
};

export default reducer;
