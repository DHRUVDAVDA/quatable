import {createSlice} from '@reduxjs/toolkit';

export type themeType = {theme: string};

export type quoteBgType = {quoteBg: string};

export type notificationConfiguresType = {
  startTime: Date;
  endTime: Date;
  quantity: number;
};

export type userInterestType = {userinterest : string[]}

const theme: themeType = {theme: 'DARK'};

const quoteBg: quoteBgType = {quoteBg: 'bg1'};

const userInterest:userInterestType = {userinterest:[]}

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

const userInterestSlice = createSlice({
  name: 'interest',
  initialState: userInterest,
  reducers: {
    updateUserInterest: (
      state: userInterestType,
      action,
    ) => {
      const {userinterest} = action.payload;
      return {
        ...state,
       userinterest:userinterest
      };
    },
  },
});

export const reducers = {
  theme: themeSlice.reducer,
  quotebg: quoteBgSlice.reducer,
  notificationconfigures: notificationConfiguresSlice.reducer,
  interest:userInterestSlice.reducer
};

export const {changeTheme} = themeSlice.actions;
export const {changeQuoteBg} = quoteBgSlice.actions;
export const {updateNotificationConfigure} =
  notificationConfiguresSlice.actions;
  export const {updateUserInterest} = userInterestSlice.actions
export default reducers;
