import React from 'react';
import Course from './course.jsx';

class More extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="instructor_courses_container">
        {this.props.info.courseInfo.length 
        ? <div className="instructor_courses_header">More Courses by {this.props.info.instInfo.inst_name}</div>
        : null}
        {this.props.info.courseInfo.slice(0,3).map(course => 
          < Course cInfo={course} instInfo={this.props.info.instInfo} />)
        }
      </div>
    );
  }
}
export default More;