const defaultStore = {
  userName: '',
  phoneNumber: '',
  password: '',
  mail: '',
};

export default (state = defaultStore, action) => {
  switch (action.type) {
    case 'updateRegister':
      return { ...state, [action.key]: action.payload };
    default:
      return state;
  }
};
