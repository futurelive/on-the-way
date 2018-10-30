const defaultStore = {
  users: [],
};

export default (state = defaultStore, action) => {
  switch (action.type) {
    case 'getUsers':
      return state;
    default:
      return state;
  }
};
