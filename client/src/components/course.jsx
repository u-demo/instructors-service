import React from 'react';
import { runInThisContext } from 'vm';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      heart: "unclicked",
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.toggleClassName = this.toggleClassName.bind(this);
  }

  mouseEnter() {
    this.setState({hover: !this.state.hover});
  }

  mouseLeave() {
    this.setState({hover: !this.state.hover});
  }

  toggleClassName() {
    if (this.state.heart === "unclicked") {
      this.setState({ heart: "clicked" });
    } else {
      this.setState({ heart: "unclicked" });
    }
  }

  render() {
    return (
      <div className="instructor_course" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div className="course_photo_section" style={{backgroundImage: `url(${this.props.cInfo.photo_url})`}}>
          <i className={`far fa-heart fa-lg big-heart ${this.state.heart}`}></i>
          <i onClick={this.toggleClassName} className={`fas fa-heart small-heart ${this.state.heart}`}></i>
          {this.state.hover 
          ? 
            <div className="hover_layer">
              <img className="instructor_mini_photo" src={this.props.instInfo.photo_url}></img>
              <div className="course_lectures">{this.props.cInfo.lectures} lectures</div>
              <div className="course_hours">{this.props.cInfo.num_hours} hours video</div>
            </div>
          : null
          }
        </div>
        <div className="course_text_section">
          <span className="course_name">{this.props.cInfo.course_name}</span>
          <div className="course_instructor">{this.props.instInfo.inst_name}</div>
          <div className="course_stats_bar">
            <img className="empty-stars" src="https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/emptyStars.png"></img>
            <div className="stars-container" style={ {width: `${this.props.cInfo.rating * 15}px`} }>
              <img className="full-stars" src="https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/filledStars.png"></img>
            </div>
            <span className="course_rating">{this.props.cInfo.rating}</span>
            <span className="course_reviews">({this.props.cInfo.reviews})</span>
          </div>
          <div className="course_price_bar">
            <span className="course_disc_price">${this.props.cInfo.disc_price}</span>
            <span className="course_full_price">${this.props.cInfo.full_price}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Course;