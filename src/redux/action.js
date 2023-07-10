import axios from "axios";
import { GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../redux/actionTypes";

export const addQuestion = (state, page) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://mock-4-c96pbkxs0-ravindra121q.vercel.app/comments", {
      params: { _page: page, _limit: 1 },
    })
    .then((res) => {
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    });
};

export const postData = (state, count) => (dispatch) => {
  return axios.post(`https://mock-4-nx73r8gdl-ravindra121q.vercel.app/posts`, {
    number: count,
    name: state.name,
  });
};
