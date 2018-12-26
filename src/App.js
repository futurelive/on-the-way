import React, { Component, lazy, Suspense } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import Loading from './components/loading/Loading';
import { history } from './history';


import ExplandRouters from './explandRouters';
import ErrorBoundary from './error/ErrorBoundary';
// import NotFoundPage from './error/NotFoundPage';
import store from './store/index';
import welcome from './utils/console';
// import Register from './containers/Register';
// import Login from './containers/Login';
// import Dashboard from './containers/Dashboard';
// import Home from './containers/Home';
// import Editor from './components/editor/Editor';

const Dashboard = lazy(() => import('./containers/Dashboard'));

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    routes: [],
  },
];

class App extends Component {
  componentDidMount() {
    welcome();
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <ErrorBoundary>
            <Router history={history} path="/">
                <>
                  {
                    routes.map(route => (
                      <ExplandRouters key={route.path} {...route} />
                    ))
                  }
                  {/* <Route path="/home/:userId/:knowledgeId/:articleId/edit" component={Editor} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/dashboard/docs" component={Login} />
                  <Route component={NotFoundPage} /> */}
                </>
            </Router>
          </ErrorBoundary>
        </Provider>
      </Suspense>
    );
  }
}

export default App;
