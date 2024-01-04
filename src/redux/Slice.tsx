import {createSlice} from '@reduxjs/toolkit';

export type themeType = {theme: string};

export type quoteBgType = {quoteBg: string};

export type notificationConfiguresType = {
  startTime: Date;
  endTime: Date;
  quantity: number;
};

const theme: themeType = {theme: 'DARK'};

const quoteBg: quoteBgType = {quoteBg: 'bg1'};

const notificationConfigures: notificationConfiguresType = {
  startTime: new Date(),
  endTime: new Date(),
  quantity: 2,
};

// Use the type alias in the reducer
const themeSlice = createSlice({
  name: 'theme',
  initialState: theme,
  reducers: {
    changeTheme: (state: themeType, action) => {
      const {theme} = action.payload;
      return {...state, theme: theme};
    },
  },
});

const quoteBgSlice = createSlice({
  name: 'quotebg',
  initialState: quoteBg,
  reducers: {
    changeQuoteBg: (state: quoteBgType, action) => {
      const {quoteBg} = action.payload;
      return {...state, quoteBg: quoteBg};
    },
  },
});

const notificationConfiguresSlice = createSlice({
  name: 'notificationconfigures',
  initialState: notificationConfigures,
  reducers: {
    updateNotificationConfigure: (
      state: notificationConfiguresType,
      action,
    ) => {
      const {startTime, endTime, quantity} = action.payload;
      return {
        ...state,
        startTime: startTime,
        endTime: endTime,
        quantity: quantity,
      };
    },
  },
});

export const reducers = {
  theme: themeSlice.reducer,
  quotebg: quoteBgSlice.reducer,
  notificationconfigures: notificationConfiguresSlice.reducer,
};

export const {changeTheme} = themeSlice.actions;
export const {changeQuoteBg} = quoteBgSlice.actions;
export const {updateNotificationConfigure} =
  notificationConfiguresSlice.actions;
export default reducers;
