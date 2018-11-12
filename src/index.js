import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/tinymce/tinymce';

/**
 * TODO
 * CDN API
 */

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
