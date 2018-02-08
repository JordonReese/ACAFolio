import CommentModel from "../models/CommentModel";

// function to get the list of comments.
export const list = (request, response) => {
  CommentModel.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
  // return response.json(addresses);
}

// function to get details of one comment
export const show = (request, response) => {

  CommentModel.findById(request.params.id).exec()
  .then(comment => {
    return response.json(comment);
  });

  // return response.json(addresses.find(address => address._id == request.params.id));
}

// function to create a comment
export const create = (request, response) => {

  const comment = new CommentModel(request.body);
  comment.save()
  .then(c => {
    return response.json(c);
  });

  // return response.json(addresses.push(request.body));
}

export const remove = (request, response) => {

  CommentModel.remove({_id: request.params.id})
  .then(comments => {
    return response.json("comment deleted");
  });
}
