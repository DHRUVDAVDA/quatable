import {configureStore, combineReducers} from '@reduxjs/toolkit'; // If not using RTK's combineReducers
import reducers from './Slice';

export const rootReducer = combineReducers({
  theme: reducers.theme,
  quoteBg: reducers.quotebg,
  notificationconfigures: reducers.notificationconfigures,
  // Other reducers if applicable
});

const myStore = configureStore({
  reducer: rootReducer,
});

export default myStore;
