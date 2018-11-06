import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginComponent from '../components/login/Login';
import style from './comm.module.scss';

class Login extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { login, updateLogin, handleLogin } = this.props;
    return (
      <div className={style.full}>
        <LoginComponent
          login={login}
          updateLogin={updateLogin}
          handleLogin={handleLogin}
        />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  updateLogin: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
