import { combineReducers } from 'redux';
import eventReducer from './eventReducer';

const reducers = combineReducers({
  event: eventReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};
export default rootReducer;
