import {combineReducers} from "redux";

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

const rootReducer = combineReducers({
  profiles, profile
});

export default rootReducer;
