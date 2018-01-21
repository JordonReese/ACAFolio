// Displays whole activiy feed
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function ActivityFeed(props) {

  return (
    <div className="activityFeed">
      <h2>Activity Feed</h2>
      <div>Activity Feed list</div>
    </div>
  );
}
export default ActivityFeed;

// Addresses.propTypes = {
//   addresses: PropTypes.array.isRequired
// }


// Example of address card.
// const AddressList = props.addresses.map((addr, id) => {
//   return (
//     <div key={id}>
//     <address className="card text-center" key={id}>
//       <div className="row no-margin-left">
//         <strong className="col-md-9 text-uppercase">{addr.address1}</strong>
//         <strong className="col-md-3"><Link to={`/addresses/${addr._id}`}> details </Link></strong><br></br>
//       </div>
//       {addr.jobNumber}<br></br>
//       {addr.client}<br></br>
//     <div className="row button-section">
//         <button className=""
//           onClick={(e) => {
//           e.preventDefault();
//           if (props.deleteAddress) {
//             props.deleteAddress(addr._id);
//           }}}
//         > Delete </button>
//       </div>
//     </address>
//   </div>
//   )
// });
