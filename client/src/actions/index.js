export function loadProfiles() {
  return function (dispatch) {
    fetch("/profiles")
    .then( (response) => {
      return response.json();
    }).then((profiles) => {
      dispatch(profilesLoaded(profiles));
    });
  };
}
function profilesLoaded(profiles) {
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

// load the comments
export function loadComments() {
  return function (dispatch) {
    fetch("/comments")
    .then( (response) => {
      return response.json();
    }).then((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
}
function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}

// Action to create a comment
export function createComment(c) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadComments()));
  };
}

// Adding call to get one comment.
export function getComment(id) {
  return function (dispatch) {
    fetch(`/comments/${id}`)
    .then( (response) => {
      return response.json();
    }).then((comment) => {
      dispatch(getCommentDone(comment));
    });
  };
}
function getCommentDone(comment) {
  return {
    type: "GET_COMMENT_DONE",
    value: comment
  };
}

// Action to delete a comment
export function deleteComment(id) {
  return function (dispatch) {
    fetch(`/comments/${id}`, {
      method: "DELETE"
    }).then(() => dispatch(loadComments()));
  };
}


// load the remarks
export function loadRemarks() {
  return function (dispatch) {
    fetch("/remarks")
    .then( (response) => {
      return response.json();
    }).then((remarks) => {
      dispatch(remarksLoaded(remarks));
    });
  };
}
function remarksLoaded(remarks) {
  return {
    type: "REMARKS_LOADED",
    value: remarks
  };
}
