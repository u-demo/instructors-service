import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from '../client/src/components/about.jsx';

const renderer = require('react-test-renderer');
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });



describe('About Component Snapshot', () => {
  const defaultProps = {
    info: {
      instInfo: {
        photo_url: 'google.com',
        rating: 5,
        reviews: 10,
        students: 100,
        courses: 10,
        inst_name: 'Charlie',
        title: 'Teacher',
        blurb: 'this is my blurb'
      }
    }
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< About {...defaultProps} />);
  });

  it('renders About component', () => {  
    const AboutTest = (props) => <About {...defaultProps} {...props} />;
    const AboutTestComponent = renderer.create(<AboutTest />).toJSON();
    expect(AboutTestComponent).toMatchSnapshot();
  });

  it('should render a div', () => {  
    expect(wrapper.find('div')).toBeDefined();     
  });
  
  it('should render an instructor class', () => {
    expect(wrapper.exists('.instructor')).toEqual(true);
  });

  it('should render one instructor photo', () => {
    expect(wrapper.find('.instructorPhoto').length).toEqual(1);
  });

  // it('should render more than one blurb paragraph', () => {
  //   expect(wrapper.find('p').length).toBeGreaterThan(1);
  // });
});





