import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.less';
import App from './App';
import * as serviceWorker from './serviceWorker';


/**
 * TODO
 * CDN API
 */
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
