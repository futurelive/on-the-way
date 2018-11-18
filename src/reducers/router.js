import { Map } from 'immutable';
import * as keys from '../constants/key/keys';
import handleDashboardPath from '../constants/types/router';

const defaultStore = Map({
  dashboardPath: '/dashboard/main',
});

export default (state = defaultStore, action) => {
  switch (action.type) {
    case handleDashboardPath:
      if (action.payload === state.get('dashboardPath')) return state;
      return state.set(keys.dashboardPath, action.payload);
    default:
      return state;
  }
};
