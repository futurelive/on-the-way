import { connect } from 'react-redux';
import RegisterRouter from '../routers/Register';

function mapStateToProps(state) {
  return {
    register: state.register,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleRegister: (key, payload) => {
      dispatch({ type: 'handleRegister', key, payload });
    },
  };
}

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterRouter);

export default Register;
