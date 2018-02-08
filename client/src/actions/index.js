export function loadProfile() {
  return function (dispatch) {
    fetch("/profile")
    .then((response) => {
      return response.json();
    }).then((profile) => {
      dispatch(profileLoaded(profile));
    });
  };
}
export function profileLoaded(profile) {
  return {
    type: "PROFILE_LOADED",
    value: profile
  };
}

export function createProfile(state) {
  return function (dispatch) {
    fetch("/profile", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(state)
    }).then(() => dispatch(loadProfile()));
  };
}

export function getProfile(id) {
  return function (dispatch) {
    fetch(`/profile/${id}`)
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
    fetch(`/profile/${id}`, {
      method: "DELETE"
    }).then(() => dispatch(loadProfile()));
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

// not making it through the action.
export function deleteActivity(id) {
  return function(dispatch){
    console.log("hello the action fired")
    fetch(`/activityfeed/${id}`, {
      method: "DELETE"
    }).then(()=> dispatch(loadActivities()));
    console.log("hello the action completed")
  }

//Something not right between here...
//and here...
};
