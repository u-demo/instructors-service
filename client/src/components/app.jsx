import React from 'react';
import About from './about.jsx';
import More from './more.jsx';
import styles from '../../dist/styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: null,
      courseId: Math.random() * 100,
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  update() {
    fetch(`/instructors/${this.state.courseId}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          instructors: data,
        });
      });
  }

  render() {
    return (
      <div className={styles.leftCol}>
        <div className={styles.aboutInstructors}>
          {this.state.instructors
            ? [
              (this.state.instructors.length > 1
                ? <div key={'header'} className={styles.aboutHeader}>About the instructors</div>
                : <div key={'header'} className={styles.aboutHeader}>About the instructor</div>
              ),
              this.state.instructors
                .map((inst, i) => <div key={i} className={styles.aboutInstructor}>
                < About key={i} info={this.state.instructors[i].instInfo} /></div>),
            ]
            : null}
        </div>
        <div className={styles.instructorCourses}>
          {this.state.instructors
            ? this.state.instructors.slice(0, 3)
              .map((inst, i) => < More key={i} info={this.state.instructors[i]}
              id={this.state.courseId} />)
            : null}
        </div>
      </div>
    );
  }
}

export default App;
