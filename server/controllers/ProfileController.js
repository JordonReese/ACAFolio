import UserModel from "../models/UserModel";

export function list(request, response) {
  UserModel.find({}).exec()
  .then(user => {
    return response.json(user);
  });
}

export function show(request, response)
{
   UserModel.findById(request.params.id).exec()
   .then(user => {
     return response.json(user);
   });
}

export function create(request, response) {
   const contact = new UserModel({
     FirstName:request.body.firstName,
     LastName:request.body.lastName,
     Email:request.body.email,
     Birthday:request.body.birthday,
     UserName:request.body.userName,
     Password:request.body.password,
     ACAID:request.body.acaid,
     Notifications: []
   });
   contact.save()
   .then(user => {
     return response.json(user);
   });
}


export function remove(request, response) {
  UserModel.remove({_id: request.params.id})
  .then(users => {
    return response.send("You have deleted a user.");
  });
}
