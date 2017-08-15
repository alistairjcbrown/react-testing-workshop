import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Failure from './';

describe('Failure component', function () {
  let success;
  let getFreeMoneyMock;

  beforeEach(function () {
    getFreeMoneyMock = sinon.mock();
    success = shallow(<Failure />);
  });

  it('renders without crashing', () => {
    expect(success.text()).toContain("Sorry, not this time!");
  });
});
