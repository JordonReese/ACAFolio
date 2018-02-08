import {combineReducers} from "redux";


function notifications(state = [], action) {
  if (action.type === "NOTIF_LOADED") {
   return action.value;
 }
  return state;
}

function profiles(state = [], action) {
  if (action.type === "PROFILES_LOADED") {
   return action.value;
 }
  return state;
}

//reducer for the state of profiles. It is needed to get the information out of the state
function profile(state = [], action) {
  if (action.type === "GET_PROFILE_DONE") {
   return action.value;
 }
  return state;
}

function activities(state = [], action) {
  if(action.type === "ACTIVITIES_LOADED") {
    return action.value;
  }
  return state;
}

/* COMMENTS reducers */
// function comments(state = [], action) {
//   if(action.type === "COMMENTS_LOADED") {
//     return action.value;
//   }
//   return state;
// }
//
// function actComments(state = [], action) {
//   if(action.type === "POPULATE_COMMENTS") {
//     return action.value;
//   }
//   return state;
// }
//
// function comment(state = [], action) {
//   if(action.type === "GET_COMMENT_DONE") {
//     return action.value;
//   }
//   return state;
// }


const rootReducer = combineReducers({
  notifications
  , profiles, profile
  , activities
  // , comments, actComments, comment, actComments
});

export default rootReducer;
