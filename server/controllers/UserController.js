import UserModel from "../models/UserModel";

//List Profile
export function list(request, response) {
  UserModel.find({}).exec()
  .then(users => {
    return response.json(users);
  });
}

//Show Profile
export function findByEmail(request, response)
{
   UserModel.findOne({email: request.params.email}).exec()
   .then(user => {
     return response.json(user);
   });
}
