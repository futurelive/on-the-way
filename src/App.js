import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './error/ErrorBoundary';
// import getUser from './services/user';
import store from './store/index';
// import welcome from './utils/console';
import Home from './containers/Home';

class App extends Component {
  componentDidMount() {
    // store.dispatch('getUsers');
    // welcome();
    // await getUser();
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;
