import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Success from './';

describe('Success component', function () {
  let success;
  let getFreeMoneyMock;

  beforeEach(function () {
    getFreeMoneyMock = sinon.mock();
    success = ReactTestUtils.renderIntoDocument(<Success getFreeMoney={getFreeMoneyMock} />);
  });

  it('renders without crashing', () => {
    expect(ReactDOM.findDOMNode(success).textContent).toContain("You're a winner");
  });

  describe('when the button is clicked on', function () {
    beforeEach(function () {
      const button = ReactTestUtils.findRenderedDOMComponentWithTag(success, 'button');
      ReactTestUtils.Simulate.click(button);
    });

    it('gives free money', () => {
      expect(getFreeMoneyMock.calledOnce).toBe(true);
    });
  });
});
