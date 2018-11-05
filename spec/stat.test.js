import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Stat from '../client/src/components/stat.jsx';

const renderer = require('react-test-renderer');
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('stat Component Snapshot', () => {
  const defaultProps = {
    image: 'google.com',
    text: "hello Charlie",
    stat: 10
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< Stat {...defaultProps} />);
  });

  it('renders stat component', () => {  
    const statTest = (props) => <Stat {...defaultProps} {...props} />;
    const statTestComponent = renderer.create(<statTest />).toJSON();
    expect(statTestComponent).toMatchSnapshot();
  });

  it('should render a div', () => {  
    expect(wrapper.find('div')).toBeDefined();     
  });
  
  it('should render an instructorIcon class', () => {
    expect(wrapper.exists('.instructorIcon')).toEqual(true);
  });

  it('should render two cells', () => {
    expect(wrapper.find('td').length).toEqual(2);
  });

});