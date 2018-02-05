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

// not making it through the action.
export function deleteActivity(id) {
  return function(dispatch){
    console.log("hello the action fired")
    fetch(`/activityfeed/${id}`, {
      method: "DELETE"
    }).then(()=> dispatch(loadActivities()));
    console.log("hello the action completed")
  }

};

/* COMMENTS ACTIONS */

// updating the comments

export function updateActivity(actId, activity) {
  console.log("updateActivity", activity);
  return function (dispatch) {
    fetch(`/activityfeed/${actId}`, {
      method: "put",
      headers: {"Accept": "application/json",
                "Content-Type": "application/json"},
      body: JSON.stringify(activity)
    }).then(() => dispatch(loadActivities()));
  };
}

export function updateComments(actId, arrComments) {
  // console.log("updateComments", actId, arrComments);
  return function (dispatch) {
    fetch(`/activityfeed/${actId}`, {
      method: "put",
      headers: {"Accept": "application/json",
                "Content-Type": "application/json"},
      body: JSON.stringify(arrComments)
    }).then(() => dispatch(loadActivities()));
  };
}
//
// export function loadComments() {
//   return function (dispatch) {
//     fetch(`/comments/${actId}`)
//     .then( (response) => {
//       return response.json();
//     }).then((comments) => {
//       dispatch(commentsLoaded(comments));
//     });
//   };
// }
// function commentsLoaded(comments) {
//   return {
//     type: "COMMENTS_LOADED",
//     value: comments
//   };
// }
//
// // load the comments.  This loads ALL comments
// export function loadActComments(actId) {
//   return function (dispatch) {
//     fetch(`/comments/${actId}`)
//     .then( (response) => {
//       return response.json();
//     }).then((comments) => {
//       dispatch(actCommentsLoaded(comments));
//     });
//   };
// }
// function actCommentsLoaded(comments) {
//   return {
//     type: "ACT_COMMENTS_LOADED",
//     value: comments
//   };
// }
//
// // Get one comment.
// export function getComment(id) {
//   return function (dispatch) {
//     fetch(`/comments/${id}`)
//     .then( (response) => {
//       return response.json();
//     }).then((comment) => {
//       dispatch(getCommentDone(comment));
//     });
//   };
// }
// function getCommentDone(comment) {
//   return {
//     type: "GET_COMMENT_DONE",
//     value: comment
//   };
// }
//
// // Action to create a comment
// export function createComment(c) {
//   return function (dispatch) {
//     fetch("/comments", {
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(c)
//     }).then(() => dispatch(loadComments()));
//   };
// }
//
// // Action to delete a comment
// export function deleteComment(id) {
//   return function (dispatch) {
//     fetch(`/comments/${id}`, {
//       method: "DELETE"
//     }).then(() => dispatch(loadComments()));
//   };
// }
