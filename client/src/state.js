export default {
  activities: [],
  notifications: [],
  comments: [],
  actComments: [],
  appDate: new Date(),
  actId: null,
  showComments: false,
  currentProfile:{},
  currentUser: {},
  profiles:[]
};

// Data not getting from database to state.  All are empty, headed to reducers.

// {
//   "jobNumber" : "1",
//   "address1" : "55 Rock Ridge",
//   "address2" : "",
//   "city" : "Liberty Hill",
//   "subdivision" : "Oregon Trail",
//   "PI" : 10,
//   "client" : "RSI"
// },
// {
//   "jobNumber" : "2",
//   "address1" : "66 Rock Ridge Trail",
//   "address2" : "",
//   "city" : "Liberty Hill",
//   "subdivision" : "Oregon Trail",
//   "PI" : 38,
//   "client" : "RSI"
// },
// {
//   "jobNumber" : "3",
//   "address1" : "77 Logan Ridge Drive",
//   "address2" : "",
//   "city" : "Cedar Park",
//   "subdivision" : "Oregon Trail",
//   "PI" : 8,
//   "client" : "CalAtlantic"
// }
