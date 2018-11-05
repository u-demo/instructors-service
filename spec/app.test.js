import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/app.jsx';

const renderer = require('react-test-renderer');
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('More Component Snapshot', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< App />);
  });

  it('renders App component', () => {
    const AppTest = props => <App />;
    const AppTestComponent = renderer.create(<AppTest />).toJSON();
    expect(AppTestComponent).toMatchSnapshot();
  });

  it('should render a div', () => {
    expect(wrapper.find('div')).toBeDefined();
  });

  it('should render a left-col class', () => {
    expect(wrapper.exists('.leftCol')).toEqual(true);
  });

  it('should not initially render an about_header div', () => {
    expect(wrapper.exists('.aboutHeader')).toEqual(false);
  });

  // it('should render an instructor_courses_header div if there are courses', () => {
  //   let props = {
  //     info: {
  //       courseInfo: [1],
  //       instInfo: {
  //         inst_name: "Charlie"
  //       }
  //     }
  //   }
  //   let wrapper = shallow(< More {...props} />);
  //   expect(wrapper.exists('.instructor_courses_header')).toEqual(true);
  // });
});
