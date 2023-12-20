import {createSlice} from '@reduxjs/toolkit';

type themeType = {theme:string}

const theme:themeType = {theme:'DARK'}

// Use the type alias in the reducer
const themeSlice = createSlice({
  name: 'theme',
  initialState: theme,
  reducers: {
    changeTheme: (state: themeType, action) => {
        state.theme = action.payload;
    },
  },
});

export const reducers = {
  theme: themeSlice.reducer,
  
};

export const {changeTheme} = themeSlice.actions;
export default reducers;