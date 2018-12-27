import React, { Component, lazy, Suspense } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import Loading from './components/loading/Loading';
import { history } from './history';


import ExplandRouters from './explandRouters';
import ErrorBoundary from './error/ErrorBoundary';
import store from './store/index';
// import welcome from './utils/console';
// import Home from './containers/Home';

const Register = lazy(() => import('./containers/Register'));
const Login = lazy(() => import('./containers/Login'));
const Dashboard = lazy(() => import('./containers/Dashboard'));
const NotFoundPage = lazy(() => import('./error/NotFoundPage'));
const Editor = lazy(() => import('./components/editor/Editor'));

const routes = [
  {
    path: '/register',
    component: Register,
    routes: [],
  },
  {
    path: '/login',
    component: Login,
    routes: [],
  },
  {
    path: '/dashboard',
    component: Dashboard,
    routes: [],
  },
  {
    path: '/home/:userId/:knowledgeId/:articleId/edit',
    component: Editor,
    routes: [],
  },
  {
    path: '/*',
    component: NotFoundPage,
    routes: [],
  },
];

class App extends Component {
  componentDidMount() {
    // 控制台展示信息,可添加欢迎词或者宣传词
    // welcome();
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
                </>
            </Router>
          </ErrorBoundary>
        </Provider>
      </Suspense>
    );
  }
}

export default App;
