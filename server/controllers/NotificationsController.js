import NotificationsModel from "../models/NotificationsModel";

export function list(request, response) {
  NotificationsModel.find({}).exec()
  .then(notifications => {
    return response.json(notifications);
  });
}

export function show(request, response) {
  NotificationsModel.findByHandle(requred.params.userHandle).exec()
  .then(notification => {
    return response.json({theId: request.params.userHandle});
  });
}

export function update(request, response) {
 return response.json({theId: request.params.id});
}

export function remove(request, response) {
 return response.json({});
}
