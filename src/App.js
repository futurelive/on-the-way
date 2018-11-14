import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { history } from './history';
// import ReactIScroll from 'react-iscroll';
// import iScroll from 'iscroll';
import ErrorBoundary from './error/ErrorBoundary';
import NotFoundPage from './error/NotFoundPage';
import store from './store/index';
import welcome from './utils/console';
import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
// import Home from './containers/Home';
import Editor from './components/editor/Editor';

class App extends Component {
  componentDidMount() {
    welcome();
    window.react = React;
    window.reactHistory = history;
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Router history={history} path="/">
              <>
                <Route path="/home/:userId/:knowledgeId/:articleId/edit" component={Editor} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route component={NotFoundPage} />
              </>
          </Router>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;

// render() {
//   return (
//   <ReactIScroll
//     iScroll={iScroll}
//     options={{
//       mouseWheel: true,
//       scrollbars: true,
//       probeType: 2,
//       interactiveScrollbars: true,
//     }}
//   >
//     <Provider store={store}>
//       <ErrorBoundary>
//         <Router history={history} path="/">
//             <>
//               <Route path="/home/:userId/:knowledgeId/:articleId/edit" component={Editor} />
//               <Route path="/register" component={Register} />
//               <Route path="/login" component={Login} />
//               <Route component={NotFoundPage} />
//             </>
//         </Router>
//       </ErrorBoundary>
//     </Provider>
//   </ReactIScroll>
//   );
// }
