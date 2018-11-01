import { connect } from 'react-redux';
import RegisterRouter from '../routers/Register';

function mapStateToProps(state) {
  const { users } = state.users;
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => {
      dispatch({ type: 'getUsers' });
    },
  };
}

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterRouter);

export default Register;
