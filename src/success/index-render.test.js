import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import Success from './';

describe('Success component', function () {
  let success;
  let getFreeMoneyMock;

  beforeEach(function () {
    getFreeMoneyMock = sinon.mock();
    success = render(<Success getFreeMoney={getFreeMoneyMock} />);
  });

  it('renders without crashing', () => {
    expect(success.text()).toContain("You're a winner");
  });

  // describe('when the button is clicked on', function () {
  //   beforeEach(function () {
  //     success.find('button').simulate('click');
  //   });

  //   it('gives free money', () => {
  //     expect(getFreeMoneyMock.calledOnce).toBe(true);
  //   });
  // });
});
