import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
import ErrorBoundary from './error/ErrorBoundary';
import NotFoundPage from './error/NotFoundPage';
import store from './store/index';
import welcome from './utils/console';
import Register from './containers/Register';
import Login from './containers/Login';
import Home from './containers/Home';
// import {BrowserRouter, Route, Switch} from 'react-router-dom'

const history = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    welcome();
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <ReactIScroll
        iScroll={iScroll}
        options={{ mouseWheel: true, scrollbars: true, probeType: 2 }}
      >
        <Provider store={store}>
          <ErrorBoundary>
            <Router history={history}>
              <>
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route component={NotFoundPage} />
              </>
            </Router>
          </ErrorBoundary>
        </Provider>
      </ReactIScroll>
    );
  }
}

export default App;
