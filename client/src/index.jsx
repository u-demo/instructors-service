import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about.jsx';
import More from './components/more.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: null,
      courseId: 7
    }
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  update() {
    fetch('/instructors/7')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        instructors: data
      });
    });
  }

  render() {
    return (
      <div className="left_col">
        <div className="about_instructors">     
          {this.state.instructors 
            ? [
              (this.state.instructors.length > 1
                ? <div className="about_header">About the instructors</div>
                : <div className="about_header">About the instructor</div>
              ),
              this.state.instructors.map((inst, i) => <div className="about_instructor">< About info={this.state.instructors[i]} /></div>)
            ]
            : null}
        </div>
        <div className="instructor_courses">
          {this.state.instructors
            ? this.state.instructors.map((inst, i) => 
            < More info={this.state.instructors[i]} id={this.state.courseId} />)
            : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById("root"));