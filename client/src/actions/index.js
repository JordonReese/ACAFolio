export function loadProfile() {
  return function (dispatch) {
    fetch("/profiles")
    .then((response) => {
      return response.json();
    }).then((profile) => {
      dispatch(profileLoaded(profile));
    });
  };
}
export function profileLoaded(profile) {
  return {
    type: "PROFILES_LOADED",
    value: profile
  };
}

export function createProfile(profile) {
  console.log("create profile", profile);
  return function (dispatch) {
    fetch("/profiles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(profile)
    }).then(() => console.log("profile saved"));
    // }).then(() => dispatch(loadProfile()));
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



export function getProfileByUserId(userId) {
  return function (dispatch) {
    fetch(`/profiles/${userId}`)
    .then( (response) => {
      return response.json();
    }).then((profile) => {
      dispatch(getProfileDone(profile));
    });
  };
}

export function getProfileByUserHandle(userHandle){
  return function(dispatch){
    return fetch(`/notifications/${userHandle}`)
    .then((response) =>{
      return response.json();
    }).then((profile)=>{
      dispatch(getToProfileDone(profile))
      return profile;
    });
  };
}

function getToProfileDone(profile) {
  console.log(profile);
  return {
    type: "GET_TOPROFILE_DONE",
    value: profile
  };
}

export function deleteProfile(id) {
  return function (dispatch) {
    fetch(`/profiles/${id}`, {
      method: "DELETE"
    }).then(() => dispatch(loadProfile()));
  };
}

export function updateNotifications(id, arrNotifications) {
  // console.log("updateComments", actId, arrComments);
  return function (dispatch) {
    fetch(`/updateNotifications/${id}`, {
      method: "PUT",
      headers: {"Accept": "application/json",
                "Content-Type": "application/json"},
      body: JSON.stringify(arrNotifications)
    }).then(() => console.log("Notifications Added"));
  };
}

/* User Section */
export function getUserByEmail(email) {
  return function (dispatch) {
    fetch(`/profiles/${email}`)
    .then( (response) => {
      return response.json();
    }).then((user) => {
      dispatch(getUserDone(user));
    });
  };
}
function getUserDone(user) {
  return {
    type: "GET_USER_DONE",
    value: user
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


/* NOTIFICATIONS SECTION */
//create notification
// export function createNotification(userHandle) {
//   return function(dispatch) {
//     fetch(`/profiles/${userHandle}`, {
//       method: "PUT",
//       headers: {"Accept":"application/json",
//                 "Content-Type":"application/json"},
//       body: JSON.stringify(userHandle)
//     })//.then(()=> dispatch(pushNotification()));
//   };
// }

// export function loadNotifications() {
//
// }
// export const updateNotification = () => {
//   return (
//     type: "UPDATE_NOTIFICATION",
//     value: notifications
//   )
// }
