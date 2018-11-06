import { connect } from 'react-redux';
import LoginRouter from '../routers/Login';
import * as action from '../actions/login';

function mapStateToProps(state) {
  return {
    login: state.get('login').toJSON(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateLogin: (key, value) => {
      dispatch(action.updateLogin(key, value));
    },
    handleLogin: () => {
      dispatch(action.handleLogin());
    },
  };
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginRouter);

export default Login;
