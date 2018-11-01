import React from 'react';

class Course extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.props.cInfo.photo_url}></img>
        </div>
        <div>
          <div>{this.props.cInfo.course_name}</div>
          <div>{this.props.instInfo.inst_name}</div>
          <div><span>{this.props.cInfo.rating}</span><span>({this.props.cInfo.reviews})</span></div>
          <div><span>${this.props.cInfo.full_price}</span><span>${this.props.cInfo.disc_price}</span></div>
        </div>
      </div>
    );
  }
}
export default Course;