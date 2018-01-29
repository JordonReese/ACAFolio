// import addresses from "../addresses.js";
import RemarkModel from "../models/RemarkModel";

// function to get the list of addresses.
export const list = (request, response) => {
  RemarkModel.find({}).exec()
  .then(remarks => {
    return response.json(remarks);
  });

  // return response.json(addresses);
}

// function to get details of one address
// export const show = (request, response) => {
//
//   AddressModel.findById(request.params.id).exec()
//   .then(address => {
//     return response.json(address);
//   });
//
//   // return response.json(addresses.find(address => address._id == request.params.id));
// }
//
// // function to create a address
// export const create = (request, response) => {
//
//   const address = new AddressModel(request.body);
//   address.save()
//   .then(c => {
//     return response.json(c);
//   });
//
//   // return response.json(addresses.push(request.body));
// }
//
// export const remove = (request, response) => {
//
//   AddressModel.remove({_id: request.params.id})
//   .then(addresses => {
//     return response.json("address deleted");
//   });
// }
