// Used to show detail on activity entry and allow for a comment or like

import React from "react";


function ActivityEntry(props) {
  return (
    <div className="createActivity">
      <h2 className="activitySectionHeader">Activity Feed</h2>
      <textArea className="activityInput" type='text' placeholder="What's Good...?" />
      <button className="activityEntryButton" type='sumbit'>Submit</button>
    </div>
  )
}














export default ActivityEntry;
