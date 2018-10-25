import React, { Component } from 'react';
import { Button } from 'antd';
import styles from './App.module.css';

class App extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log(styles);
    return (
      <div className={styles.App}>
        <header className="App-header">
          <Button>123</Button>
        </header>
      </div>
    );
  }
}

export default App;
