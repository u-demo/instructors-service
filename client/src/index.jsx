import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about.jsx';
import More from './components/more.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: null,
      courseId: 54
    }
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  update() {
    fetch('/instructors/54')
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
    console.log(this.state.instructors);
    return (
      <div>
        <div>     
          {this.state.instructors 
            ? this.state.instructors.map((inst, i) => <div>< About info={this.state.instructors[i]} /></div>)
            : null}
        </div>
        <div>
          {this.state.instructors
            ? this.state.instructors.map((inst, i) => 
            <div>< More info={this.state.instructors[i]} id={this.state.courseId} /></div>)
            : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById("root"));