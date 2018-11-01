import React, { Component } from 'react';
import RegisterComponent from '../components/register/Register';

class Register extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <RegisterComponent />
      </div>
    );
  }
}

export default Register;
