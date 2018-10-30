import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>About the instructor</p>
        <div className="info_photo">
          <img src={this.props.info.instInfo.photo_url}></img>
          <table>
            <tbody>
              <tr>
                <td>{this.props.info.instInfo.rating} Instructor Rating</td>
              </tr>
              <tr>
                <td>{this.props.info.instInfo.reviews} Reviews</td>
              </tr>
              <tr>
                <td>{this.props.info.instInfo.students} Students</td>
              </tr>
              <tr>
                <td>{this.props.info.instInfo.courses} Courses</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="title_blurb">
          <div>{this.props.info.instInfo.inst_name}</div>
          <div>{this.props.info.instInfo.title}</div>
          <div>{this.props.info.instInfo.blurb}</div>
        </div>
      </div>
    );
  }
}
export default About;