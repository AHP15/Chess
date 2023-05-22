import { combineReducers } from '@reduxjs/toolkit';
import testReducer from './test/testSlice';

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
