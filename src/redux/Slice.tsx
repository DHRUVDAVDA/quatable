import { createSlice } from "@reduxjs/toolkit";

type themeType = { theme: string };

type quoteBgType = { quoteBg: string };

const theme: themeType = { theme: "DARK" };

const quoteBg: quoteBgType = { quoteBg: "bg1" };

// Use the type alias in the reducer
const themeSlice = createSlice({
  name: "theme",
  initialState: theme,
  reducers: {
    changeTheme: (state: themeType, action) => {
      const { theme } = action.payload;
      return { ...state, theme: theme };
    },
  },
});

const quoteBgSlice = createSlice({
  name: "quotebg",
  initialState: quoteBg,
  reducers: {
    changeQuoteBg: (state: quoteBgType, action) => {
      const { quoteBg } = action.payload;
      return { ...state, quoteBg: quoteBg };
    },
  },
});

export const reducers = {
  theme: themeSlice.reducer,
  quotebg: quoteBgSlice.reducer,
};

export const { changeTheme } = themeSlice.actions;
export const { changeQuoteBg } = quoteBgSlice.actions;
export default reducers;
