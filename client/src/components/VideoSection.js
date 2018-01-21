import React, {Component} from "react";

class VideoSection extends Component {

  render(){
    let movieList = [
      {
        week: 1,
        day: "Tues",
        topic: "React",
        date: "00/00/0000",
        url: "https://youtu.be/b80G51Gvq24"

      },
      {
        week: 1,
        day: "Thurs",
        topic: "React",
        date: "00/00/0000",
        url: "https://youtu.be/qwcuvpJl4UE"
      },
      {
        week: 2,
        day: "Tues",
        topic: "Redux",
        date: "00/00/0000",
        url: "https://youtu.be/b80G51Gvq24"

      },
      {
        week: 2,
        day: "Thurs",
        topic: "Redux",
        date: "00/00/0000",
        url: "https://youtu.be/qwcuvpJl4UE"
      },
      {
        week: 3,
        day: "Tues",
        topic: "MongoDB",
        date: "00/00/0000",
        url: "https://youtu.be/b80G51Gvq24"

      },
      {
        week: 3,
        day: "Thurs",
        topic: "MongoDB",
        date: "00/00/0000",
        url: "https://youtu.be/qwcuvpJl4UE"
      }
    ];

    let renderMovies = movieList.map(movie => {
      return (
        <div class="weeklyVideo">
          <video width='200' height='150' controls>
            <source src={movie.url} />
          </video>
          <div className='videoInfo'>
            <p>Week: {movie.week}</p>
            <p>Day: {movie.day}</p>
            <p>Date: {movie.date}</p>
          </div>
        </div>
      )
    })
    return (
      <div className="videoSectionWrap">
        <h2 className="dashboardHeader">Weekly Videos</h2>
        <div className="weeklyVideoWrap">
          {renderMovies}
        </div>
      </div>
    );
  }
}

export default VideoSection;
