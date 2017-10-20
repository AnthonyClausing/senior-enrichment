// import axios from 'axios';

// const GET_CAMPUSES = "GET_CAMPUS";
// const ADD_CAMPUS = "ADD_CAMPUS";
// const REMOVE_CAMPUS = "REMOVE_CAMPUS";
// const UPDATE_CAMPUS = "UPDATE_CAMPUS";
// const SINGLE_CAMPUS = "SINGLE_CAMPUS";

// const getCampuses = (campuses) => {
//   const action = { type: GET_CAMPUSES, campuses }
// }
// const addCampus = (content) => {
//   const action = { type: ADD_CAMPUS, content }
// }
// const removeCampus = (id) => {
//   const action = { type: REMOVE_CAMPUS, id }
// }

export default function reducer(campuses = [], action) {
  // switch (action.type) {
  //   case GET_CAMPUSES:
  //     return action.campuses;
  //   // case SINGLE_CAMPUS:
  //   // return 
  //   case ADD_CAMPUS:
  //     return [action.campus, ...campuses]
  //   case REMOVE_CAMPUS:
  //     return campuses.filter(campus => campus.id !== action.id)
  //   case UPDATE_CAMPUS:
  //     return 'who';
  //   default:
  //     return campuses
  // }
}

// export const fetchCampuses = () => dispatch => {
//   axios.get('/api/campuses')
//     .then(res => res.data)
//     .then(campuses => {
//       const action = getCampuses(campuses);
//       dispatch(action);
//     });
// }

