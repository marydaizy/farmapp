import axios from "axios";

import { GET_FARMERS, DELETE_FARMER, POST_FARMER } from "./types";

// GET FARMER
export const getFarmers = () => dispatch => {
  axios
    .get("/farmers/")
    .then(res => {
      dispatch({
        type: GET_FARMERS,
        payload: [res.data]
      });
    })
    .catch(err => console.log(err));
};
// DELETE FARMER
// export const deleteFarmer = () => dispatch => {
//     axios.delete(`/farmers/${id}/`)
//     .then(res =>{
//       dispatch({
//          type: DELETE_FARMER ,
//          payload: id
//       });
//     }).catch(err => console.log(err));
//   }
