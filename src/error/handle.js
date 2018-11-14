import error from '../constants/types/notification';

export default (response, store) => {
  if (response.code === 1) return true;
  store.dispatch({
    type: error,
    payload: {
      message: '网络请求失败!',
      description: response.msg,
    },
  });
  return false;
};
