import React, {Component} from "react";
// import {Tabs, Tab} from "react-materialize";

class PreWork extends Component {
  constructor(props){
    super(props);
    this.state= {
      render: false,
      prework: false,
      videos: false,
      homework: false
    }
    // this.changeStateCoursework = this.changeStateCoursework.bind(this);
  }
  changeStateCoursework(){
    this.setState({
      render: false
    });
  }

  

  render(){

    const weekList = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10"];
    let folderRender = weekList.map(week => {
      return (
        <div className="weeklyFolder" key={week}>
          <a
            className="weekLink"
            onClick={(e)=>{
              this.setState({render: true});
              console.log(this.state.render);
            }
          }>
            <img className='folderImage' src={'https://image.flaticon.com/icons/png/512/148/148953.png'} alt="" />
          {week}</a>
        </div>
      );
    });

    function courseworkRender(props) {
      return(
        <div className="weeklyFolderDisplay">
          <a
            className="weeklyRenderClose"
            >^</a>
          <a className="weeklylogoLink"
            onClick={e=>{
              console.log("hello");
            }}
            >
            <img
              className="weeklyPreworkImg weeklyImg"
              src="https://image.flaticon.com/icons/svg/149/149330.svg"
              alt=""
              >
            </img>
            <p className="weeklylogoText">Prework</p>
          </a>
          <a className="weeklylogoLink"
            onClick={(e) => {
              this.setState({videos: true});
            }}>
            <img
              className="weeklyVideoImg weeklyImg"
              src="https://image.flaticon.com/icons/svg/149/149090.svg"
              alt=""
              >
            </img>
            <p className="weeklylogoText">Videos</p>
          </a>
          <a className="weeklylogoLink"
            onClick={(e) => {
              this.setState({homework: true});
            }}>
            <img
              className="weeklyHomeworkImg weeklyImg"
              src="https://image.flaticon.com/icons/svg/124/124671.svg"
              alt=""
              >
            </img>
            <p className="weeklylogoText">Homework</p>
          </a>
        </div>
      )
    };

    function renderPrework(props){
      return (
        <div className="preworkRender">
          <a href="codeacademy.com">CodeAcademy</a>
          <a href="https://github.com/">GitHub</a>
        </div>
      )
    }

    const weeklyRender = () => {
      if(this.state.render) {
        return courseworkRender();
        if(this.state.prework){
          return renderPrework();
        }
      } else {
        return null;
      }
    }



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
        <div>
          {weeklyRender()}
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
