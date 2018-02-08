export function loadProfiles() {
  return function (dispatch) {
    fetch("/profiles")
    .then((response) => {
      return response.json();
    }).then((profiles) => {
      dispatch(profilesLoaded(profiles));
    });
  };
}
export function profilesLoaded(profiles) {
  return {
    type: "PROFILES_LOADED",
    value: profiles
  };
}

export function createProfile(state) {
  return function (dispatch) {
    fetch("/profiles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(state)
    }).then(() => dispatch(loadProfiles()));
  };
}

export function getProfile(id) {
  return function (dispatch) {
    fetch(`/profiles/${id}`)
    .then( (response) => {
      return response.json();
    }).then((profile) => {
      dispatch(getProfileDone(profile));
    });
  };
}
function getProfileDone(profile) {
  return {
    type: "GET_PROFILE_DONE",
    value: profile
  };
}

export function deleteProfile(id) {
  return function (dispatch) {
    fetch(`/profiles/${id}`, {
      method: "DELETE"
    }).then(() => dispatch(loadProfiles()));
  };
}

/* ACTIVITIES SECTION */

//Load all Activities
export function loadActivities(){
  return function(dispatch){
    fetch("/activityfeed")
    .then((response) => {
      return response.json()
    }).then((activities) => {
      dispatch(activitiesLoaded(activities));
    });
  }
}

export function activitiesLoaded(activities) {
  return {
    type: "ACTIVITIES_LOADED",
    value: activities
  }
}

//Create new Activity
export function createActivity(activity) {
  return function(dispatch){
    fetch("/activityfeed", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(activity)
    }).then(() => dispatch(loadActivities()));
  };
}

//Delete Activity

export function deleteActivity(id) {
  return function(dispatch){
    fetch(`/activityfeed/${id}`, {
      method: "DELETE"
    }).then(()=> dispatch(loadActivities()));
  }
}

/* COMMENTS ACTIONS */

// updating the comments

export function updateActivity(actId, activity) {
  return function (dispatch) {
    fetch(`/activityfeed/${actId}`, {
      method: "PUT",
      headers: {"Accept": "application/json",
                "Content-Type": "application/json"},
      body: JSON.stringify(activity)
    }).then(() => dispatch(loadActivities()));
  };
}

export function updateComments(actId, arrComments) {
  // console.log("updateComments", actId, arrComments);
  return function (dispatch) {
    fetch(`/updatecomments/${actId}`, {
      method: "put",
      headers: {"Accept": "application/json",
                "Content-Type": "application/json"},
      body: JSON.stringify(arrComments)
    }).then(() => dispatch(loadActivities()));
  };
}
