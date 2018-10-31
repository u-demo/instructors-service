import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.addCommas = this.addCommas.bind(this);
  }

  handleClick() {
    this.setState({
      expand: true,
    });
  }

  addCommas(stat){
    var str = String(stat);
    if (str.length > 3) {
      let arr = str.split('');
      for (var i = arr.length - 3; i > 0; i -= 3) {
        arr.splice(i, 0, ',');
      }
      return arr.join('');
    } 
    return str;
  }

  render() {
    return (
      <div className="instructor">
        <div className="info_photo">
          <img className="instructor_photo" src={this.props.info.instInfo.photo_url}></img>
          <table className="instructor_info">
            <tbody>
              <tr>
                <td>
                  <img className="instructor_icon" src="https://s3-us-west-1.amazonaws.com/u-demo/blackstar.png"></img>
                </td>
                <td>
                  <span className="instructor_stat">{this.addCommas(this.props.info.instInfo.rating)}</span>
                  <span className="instructor_stat_text">Instructor Rating</span>
                </td>
              </tr>
              <tr>
                <td>
                <img className="instructor_icon" src="https://s3-us-west-1.amazonaws.com/u-demo/chat.png"></img>
                </td>
                <td>
                  <span className="instructor_stat">{this.addCommas(this.props.info.instInfo.reviews)}</span>
                  <span className="instructor_stat_text">Reviews</span>
                </td>
              </tr>
              <tr>
                <td>
                <img className="instructor_icon" src="https://s3-us-west-1.amazonaws.com/u-demo/user.png"></img>
                </td>
                <td>
                  <span className="instructor_stat">{this.addCommas(this.props.info.instInfo.students)}</span>
                  <span className="instructor_stat_text">Students</span>
                </td>
              </tr>
              <tr>
                <td>
                <img className="instructor_icon" src="https://s3-us-west-1.amazonaws.com/u-demo/play.png"></img>
                </td>
                <td>
                  <span className="instructor_stat">{this.props.info.instInfo.courses}</span>
                  <span className="instructor_stat_text">Courses</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="title_blurb">
          <div>
            <div className="instructor_name">{this.props.info.instInfo.inst_name}</div>
          </div>
          <div className="instructor_title">{this.props.info.instInfo.title}</div>
          {this.state.expand 
          ?
          <div className="instructor_blurb_long">
          {this.props.info.instInfo.blurb.split('\n').map((p) => {
            return <p>{p}</p>;
          })}
          </div>
          : 
          <div>
            <div className="instructor_blurb_short">
                {this.props.info.instInfo.blurb.split('\n').map((p) => {
                  return <p>{p}</p>;
                })}
            </div>
            <div className="more_blurb" onClick={this.handleClick}>+ See more</div>
          </div>
          }
        </div>
      </div>
    );
  }
}
export default About;