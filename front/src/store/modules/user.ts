/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const userFetch = 'user/fetch';

type initialStateProps = {
  user: {},
  error: boolean,
  isLoading: boolean,
  isSignIn: boolean,
};

const initialState = {
  user: {},
  error: false,
  isLoading: false,
  isSignIn: false,
};

export const fetchUser = createAsyncThunk(userFetch, async () => ({
  id: 2,
  email: 'Batman',
}));

const userSlice = createSlice({
  name: 'user',
  initialState: initialState as initialStateProps,
  reducers: {
    logOut: (state) => {
      state = { ...state, isSignIn: false, user: {} };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state = { ...state, isLoading: true, error: false };
        return state;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state = {
          ...state,
          isLoading: false,
          user: action.payload,
          isSignIn: true,
          error: false,
        };
        return state;
      })
      .addCase(fetchUser.rejected, (state) => {
        state = { ...state, isLoading: false, error: true };
        return state;
      });
  },
});
export const { logOut } = userSlice.actions;
export default userSlice.reducer;
