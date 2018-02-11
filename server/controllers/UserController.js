import UserModel from "../models/UserModel";

//List User
export function list(request, response) {
  UserModel.find({}).exec()
  .then(users => {
    return response.json(users);
  });
}

//Find the user by email.  Used to get id for the profile.
export function findByEmail(request, response)
{
   UserModel.find({ email: request.params.email }).exec()
   .then(user => {
     return response.json(user);
   });
}
