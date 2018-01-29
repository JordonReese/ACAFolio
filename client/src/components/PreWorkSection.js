import React, {Component} from "react";

class PreWork extends Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    const weekList = ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7", "Week8", "Week9", "Week10"];
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
        <div className="weeklyFolderWrap">
            {folderRender}
        </div>
      </div>

    );
  }
}
export default PreWork;
