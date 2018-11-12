import React, { Component } from 'react';
import Header from '../components/header/Header';

class Home extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Home;
