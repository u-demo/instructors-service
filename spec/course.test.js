import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Course from '../client/src/components/course.jsx';

const renderer = require('react-test-renderer');
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Course Component Snapshot', () => {
  const defaultProps = {
    cInfo: {
      photo_url: 'google.com',
      lectures: 10,
      num_hours: 10,
      rating: 3.0,
      reviews: 100,
      full_price: 500.00,
      disc_price: 50.00,
      course_name: 'Testing React'
    },
    instInfo: {
      inst_name: "Charlie",
      photo_url: 'google.com'
    }
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< Course {...defaultProps} />);
  });

  it('renders Course component', () => {  
    const CourseTest = (props) => <Course {...defaultProps} {...props} />;
    const CourseTestComponent = renderer.create(<CourseTest />).toJSON();
    expect(CourseTestComponent).toMatchSnapshot();
  });

  it('should render a div', () => {  
    expect(wrapper.find('div')).toBeDefined();     
  });
  
  it('should render an instructor_course class', () => {
    expect(wrapper.exists('.instructorCourse')).toEqual(true);
  });

  it('should render two hearts', () => {
    expect(wrapper.find('.fa-heart').length).toEqual(2);
  });

  it('should change state on mouse enter and mouse leave', () => {
    expect(wrapper.state('hover')).toBe(false);
    wrapper.simulate("mouseEnter");
    expect(wrapper.state('hover')).toBe(true);
    wrapper.simulate("mouseLeave");
    expect(wrapper.state('hover')).toBe(false);
  });
});