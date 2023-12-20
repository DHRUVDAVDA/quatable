import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; // If not using RTK's combineReducers
import reducers from './Slice';

export const rootReducer = combineReducers({
  theme: reducers.theme,
  // Other reducers if applicable
});

const myStore = configureStore({
  reducer: rootReducer,
});

export default myStore;
