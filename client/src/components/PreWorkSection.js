import React, {Component} from "react";
import {Tabs, Tab} from "react-materialize";

class PreWork extends Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    const weekList = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10"];
    let folderRender = weekList.map(week => {
      return (
        <div className="weeklyFolder" key={week}>
          <a className="weekLink" href="">
            <img className='folderImage' src={'https://image.flaticon.com/icons/png/512/148/148953.png'} alt="" />
          {week}</a>
        </div>
      );
    });

    return (

      <div className="preWorkWrap">
        <h2 className="dashboardHeader">Prework</h2>
          <div className="segmentTagWrap">
            <a className="segmentTag" href="#">Intro</a>
            <a className="segmentTag" href="#">Intermediate</a>
            <a className="segmentTag" href="#">Advanced</a>
          </div>
        <div className="weeklyFolderWrap">
            {folderRender}
        </div>
      </div>

    );
  }
}
export default PreWork;

// <div className="segmentTagWrap">
//   <a className="segmentTag" href="#">Intro</a>
//   <a className="segmentTag" href="#">Intermediate</a>
//   <a className="segmentTag" href="#">Advanced</a>
// </div>
//
