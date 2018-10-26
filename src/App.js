import React, { Component } from 'react';
import { Button } from 'antd';
import welcome from './utils/console';

class App extends Component {
  componentDidMount() {
    welcome();
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <Button>123</Button>
      </div>
    );
  }
}

export default App;
