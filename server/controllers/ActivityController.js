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

// Put Activity.  This will update the activity.
export const update = (request,response) =>{
  // const activity= new ActivityModel(request.body);
  ActivityModel.update({_id:request.params.id},{post:request.body}, function(err, raw) {
    if(err) return handleError(err);
    console.log("raw response", raw);
  })

// Put Activity.  This will update the activity.
export const updateComments = (request,response) =>{
  // const activity= new ActivityModel(request.body);
  ActivityModel.update({ _id:request.params.id }, { comments: request.body } )
  .then(result => {
    return response.json(result);
  });
}

//Delete Activity
export const remove = (request, response) => {
  console.log("ControllerFired", request.params.id);
  ActivityModel.remove({_id:request.params.id})
  .then(activities => {
    return response.json("Acticvity Deleted");
  });
}
