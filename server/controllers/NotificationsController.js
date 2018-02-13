import NotificationsModel from "../models/NotificationsModel";

// function to get the notifications
export const list = (request, response) => {
  NotificationsModel.find({}).exec()
  .then(notifications => {
    return response.json(notifications);
  });
}

// function to show just one notification
export const show = (request, response) => {
  ProfileModel.findOne({userhandle: request.params.userHandle}).exec()
  .then(notification => {
    return response.json({theHandle: request.params.userHandle});
  });
}

// function to update a notification
export const update = (request, response) => {
 return response.json({theHandle: request.params.userhandle});
}

// function to remove a notification
export const remove = (request, response) => {
 //  NotificationsModel.remove({[0]})
 // return response.json({});
 return;
}
