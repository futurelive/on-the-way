import React, { Component } from 'react';
// import { Button } from 'antd';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import welcome from './utils/console';
import ErrorBoundary from './error/ErrorBoundary';
import getUser from './services/user';

const store = createStore(() => {});

class App extends Component {
  async componentDidMount() {
    welcome();
    await getUser();
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>Hello Word!</ErrorBoundary>
      </Provider>
    );
  }
}

export default App;
