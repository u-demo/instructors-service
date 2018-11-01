import React from 'react';
import { runInThisContext } from 'vm';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({hover: !this.state.hover});
  }

  mouseLeave() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    return (
      <div className="instructor_course" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div className="course_photo_section">
          {this.state.hover 
          ? 
            <div className="hover_layer">
              <img className="instructor_mini_photo" src={this.props.instInfo.photo_url}></img>
              <div>{this.props.cInfo.lectures} lectures</div>
              <div>{this.props.cInfo.num_hours} hours video</div>
            </div>
          : null
          }
          <img className="course_photo" src={this.props.cInfo.photo_url}></img>
        </div>
        <div className="course_text_section">
          <span className="course_name">{this.props.cInfo.course_name}</span>
          <div className="course_instructor">{this.props.instInfo.inst_name}</div>
          <div className="course_stats_bar">
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