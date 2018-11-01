import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterComponent from '../components/register/Register';
import style from './comm.module.scss';

class Register extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { register, handleRegister } = this.props;
    return (
      <div className={style.full}>
        <RegisterComponent register={register} handleRegister={handleRegister} />
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }).isRequired,
  handleRegister: PropTypes.func.isRequired,
};

export default Register;
