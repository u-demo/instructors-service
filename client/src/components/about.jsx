import React from 'react';
import Stat from './stat.jsx';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: "short",
      box: "visible"
    }
    this.handleClick = this.handleClick.bind(this);
    this.addCommas = this.addCommas.bind(this);
  }

  handleClick() {
    if (this.state.expand === "short") {
      this.setState({
        expand: "long",
        box: "invisible"
      });
    } else {
      this.setState({
        expand: "short",
        box: "visible"
      });
    }
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
              {["Instructor Rating", "Reviews", "Students", "Courses"].map((title, i) => {
                const images = ["blackstar", "chat", "user", "play"];
                const stats = [this.addCommas(this.props.info.instInfo.rating),
                  this.addCommas(this.props.info.instInfo.reviews),
                  this.addCommas(this.props.info.instInfo.students),
                  this.props.info.instInfo.courses];

                return < Stat stat={stats[i]} text={title}
                image={`https://s3-us-west-1.amazonaws.com/u-demo/${images[i]}.png`} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="title_blurb">
          <div>
            <div className="instructor_name">{this.props.info.instInfo.inst_name}</div>
          </div>
          <div className="instructor_title">{this.props.info.instInfo.title}</div>
          <div className={`instructor_blurb ${this.state.expand}`}>
              {this.props.info.instInfo.blurb.split('\n').map((p) => {
                return <p>{p}</p>;
              })}
            <div className={`more_container ${this.state.box}`}>
              <div className="more_blurb" onClick={this.handleClick}>+ See more</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;