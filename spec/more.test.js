import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import More from '../client/src/components/more.jsx';

const renderer = require('react-test-renderer');
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('More Component Snapshot', () => {
  const defaultProps = {
    info: {
      courseInfo: [],
      instInfo: {
        inst_name: "Charlie"
      }
    }
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< More {...defaultProps} />);
  });

  it('renders More component', () => {  
    const MoreTest = (props) => <More {...defaultProps} {...props} />;
    const MoreTestComponent = renderer.create(<MoreTest />).toJSON();
    expect(MoreTestComponent).toMatchSnapshot();
  });

  it('should render a div', () => {  
    expect(wrapper.find('div')).toBeDefined();     
  });
  
  it('should render an instructorCoursesContainer class', () => {
    expect(wrapper.exists('.instructorCoursesContainer')).toEqual(true);
  });

  it('should not render an instructorCoursesHeader div if there are no courses', () => {
    expect(wrapper.exists('.instructorCoursesHeader')).toEqual(false);
  });

  it('should render an instructorCoursesHeader div if there are courses', () => {
    let props = {
      info: {
        courseInfo: [1],
        instInfo: {
          inst_name: "Charlie"
        }
      }
    }
    let wrapper = shallow(< More {...props} />);
    expect(wrapper.exists('.instructorCoursesHeader')).toEqual(true);
  });

});