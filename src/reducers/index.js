import counterReducer from './counter';
import loginReducer from './isLogged';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  counterReducer,
  loginReducer
});

export default rootReducers;
