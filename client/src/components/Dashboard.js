// Displays ACA classroom information
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Dashboard(props) {

  return (
    <div>
      <div className="dashSection">
        <h2 className="dashTitle">Attendance & Grades</h2>
        <div>Attendance & Grades</div>
      </div>
      <div className="dashSection">
        <h2 className="dashTitle">Classroom</h2>
        <div>Classroom details</div>
      </div>
    </div>
  );

}
export default Dashboard;
