import React from 'react';
import Course from './course.jsx';

class More extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>More Courses by {this.props.info.instInfo.inst_name}</div>
        {this.props.info.courseInfo.map((course, index) => {
          if (course.id !== this.props.id) {
            return <div>< Course cInfo={course} instInfo={this.props.info.instInfo} /></div>;
          }
        })}
      </div>
    );
  }
}
export default More;