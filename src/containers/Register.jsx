import { connect } from 'react-redux';
import RegisterRouter from '../routers/Register';
import * as action from '../actions/register';

function mapStateToProps(state) {
  return {
    register: state.register,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateRegister: (key, value) => {
      dispatch(action.updateRegister(key, value));
    },
  };
}

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterRouter);

export default Register;
