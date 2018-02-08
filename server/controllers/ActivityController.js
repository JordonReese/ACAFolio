import ActivityModel from "../models/ActivityModel.js"


//Get Activities
export const list = (request, response) => {
   ActivityModel.find({}).exec()
  .then(activities => {
    // console.log("Activities", activities);
    return response.json(activities);
  });
}

//Get Single Activity
export const show = (request, response) => {
  ActivityModel.findById(request.params.id).exec()
  .then(activity => {
    return response.json(activity);
  });
}

//Post Activity
export const create = (request,response) =>{
  const activity= new ActivityModel(request.body);
  activity.save()
  .then(activity => {
    return response.json(activity);
  });
}


//Put Activity
// export const update = (request, response) => {
//   ActivityModel.findById(request.params.id)
// }

//Delete Activity
export const remove = (request, response) => {
  console.log("ControllerFired", request.params.id);
  ActivityModel.remove({_id:request.params.id})
  .then(activities => {
    return response.json("Activity Deleted");
  });
}
