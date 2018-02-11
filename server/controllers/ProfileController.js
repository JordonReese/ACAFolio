import ProfileModel from "../models/ProfileModel";

//List Profile
export function list(request, response) {
  ProfileModel.find({}).exec()
  .then(profiles => {
    return response.json(profiles);
  });
}

//Show Profile
export function show(request, response)
{
   ProfileModel.findById(request.params.id).exec()
   .then(profile => {
     return response.json(profile);
   });
}

//Create Profile
export function create(request, response) {
   const profile = new ProfileModel(request.body);
   profile.save()
   .then(profile => {
     console.log("Profile saved to the database");
     return response.json(profile);
   // })
   // .catch(err => {
   //   console.log("create profile error", err);
     // next(err);
   });
}

//Remove Profile
export function remove(request, response) {
  ProfileModel.remove({_id: request.params.id})
  .then(profile => {
    return response.send("You have deleted a Profile.");
  });
}

export function getProfileByUserHandle(request, response){
   ProfileModel.findOne({userHandle: request.params.userHandle}).exec()
   .then(profile => {
     return response.json(profile);
   });
}

export function updateNotifications(request, response) {
  ProfileModel.update({_id: request.params.id},{notifications: request.body})
  .then(result => {
    return response.send("You have updated a notification");
  });
}
