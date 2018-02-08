import ProfileModel from "../models/ProfileModel";

//List Profile
export function list(request, response) {
  ProfileModel.find({}).exec()
  .then(Profile => {
    return response.json(Profile);
  });
}

//Show Profile
export function show(request, response)
{
   ProfileModel.findById(request.params.id).exec()
   .then(Profile => {
     return response.json(Profile);
   });
}

//Create Profile
export function create(request, response) {
   const contact = new ProfileModel({
     smhandle:request.body.smhandle,
     firstName:request.body.firstName,
     lastName:request.body.lastName,
     email:request.body.email,
     birthday:request.body.birthday,
     cityState:request.body.cityState,
     bio:request.body.bio,
     Notifications: []
   });
   contact.save()
   .then(Profile => {
     return response.json(Profile);
   });
}

//Remove Profile
export function remove(request, response) {
  ProfileModel.remove({_id: request.params.id})
  .then(Profiles => {
    return response.send("You have deleted a Profile.");
  });
}
