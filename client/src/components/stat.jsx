import React from 'react';

class Stat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          <img className="instructor_icon" src={this.props.image}></img>
        </td>
        <td>
          <span className="instructor_stat">{this.props.stat}</span>
          <span className="instructor_stat_text">{this.props.text}</span>
        </td>
      </tr>
    );
  }
}
export default Stat;