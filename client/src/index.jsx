import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: null
    }
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  update() {
    fetch('/instructors')
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
      <div>     
        {this.state.instructors ? this.state.instructors.map((i) => <div>{i.inst_name}</div>) : null}
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById("root"));