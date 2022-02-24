import { GET_ALL_PRODUCTS } from "../constants/products";

const initialState = {
  allProducts: [],
};


// Reducers
const PostReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PRODUCTS:
        return {
          ...state,
          allProducts: [...action.post],
        };
      default:
        return state;
    }
  };
  
  export default PostReducer;