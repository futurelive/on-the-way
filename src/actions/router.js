import handleRouter from '../constants/types/router';

export default path => ({
  type: handleRouter,
  payload: path,
});
