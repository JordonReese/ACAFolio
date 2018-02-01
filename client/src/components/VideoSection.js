import React, {Component} from "react";

class VideoSection extends Component {

  render(){
    let movieList = [
      {
        week: 1,
        day: "Tues",
        topic: "React",
        date: "00/00/0000",
        url: "https://www.youtube.com/embed/cKhVupvyhKk"
      },
      {
        week: 1,
        day: "Thurs",
        topic: "React",
        date: "00/00/0000",
        url: "https://www.youtube.com/embed/9zOo4JkZgSI"
      },
      {
        week: 2,
        day: "Tues",
        topic: "Redux",
        date: "00/00/0000",
        url: "https://www.youtube.com/embed/gEj3NbChJx8"

      },
      {
        week: 2,
        day: "Thurs",
        topic: "Redux",
        date: "00/00/0000",
        url: "https://www.youtube.com/embed/u3IvvgRcAKY"
      },
      {
        week: 3,
        day: "Tues",
        topic: "MongoDB",
        date: "00/00/0000",
        url: "https://www.youtube.com/embed/cKhVupvyhKk"

      },
      {
        week: 3,
        day: "Tues",
        topic: "MongoDB",
        date: "00/00/0000",
        url: "https://www.youtube.com/embed/9zOo4JkZgSI"

      },
      {
        week: 4,
        day: "Tues",
        topic: "MongoDB",
        date: "00/00/0000",
        url: "https://www.youtube.com/embed/gEj3NbChJx8"

      },
      {
        week: 4,
        day: "Thurs",
        topic: "MongoDB",
        date: "00/00/0000",
        url: "https://www.youtube.com/embed/u3IvvgRcAKY"
      }
    ];

    let renderMovies = movieList.map(movie => {
      console.log(movie.url);
      return (
        <div class="weeklyVideo">
            <iframe width="300" height="200" src={movie.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <div className='videoInfo'>
            <p><strong>Week:</strong> {movie.week}</p>
            <p><strong>Day:</strong> {movie.day}</p>
            <p><strong>Date:</strong> {movie.date}</p>
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
