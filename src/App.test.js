import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Failure from './failure';
import Success from './success';

describe('App', function () {
  let app;
  let getFreeMoneyMock;

  const createComponent = function (props = {}) {
    getFreeMoneyMock = sinon.mock();
    return shallow(<App isSuccessful={false} getFreeMoney={getFreeMoneyMock} {...props} />)
  };

  describe('when not successful', function () {
    beforeEach(function () {
      app = createComponent({ isSuccessful: false });
    });

    it('renders failure', () => {
      expect(app.find(Failure).exists()).toBe(true);
      expect(app.find(Success).exists()).toBe(false);
    });
  });

  describe('when not successful', function () {
    beforeEach(function () {
      app = createComponent({ isSuccessful: true });
    });

    it('renders failure when not successful', () => {
      expect(app.find(Failure).exists()).toBe(false);
      expect(app.find(Success).exists()).toBe(true);
    });
  });
});
