import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_DATA_REQUEST,
} from "./actionTypes";

const initialState = {
  data: [],
  userData: [],
  loading: false,
  error: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        loading: false,
        data: payload,
      };
    case GET_DATA_FAILURE:
      return {
        loading: false,
        error: true,
      };
    case POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        userData: payload,
      };
    default:
      return state;
  }
};
