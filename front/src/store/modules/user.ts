/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import literals from '../../global/literals';

export const userFetch = 'https://reqres.in/api/login';
type initialStateProps = {
  user: object,
  error: boolean,
  isLoading: boolean,
};

const initialState = {
  user: {},
  error: false,
  isLoading: false,
};

export const fetchUser = createAsyncThunk(userFetch, async ({ email, password }:
  {email:string, password:string}) => {
  const { data: { token } } = await axios.post(userFetch, { email, password });
  return token;
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialState as initialStateProps,
  reducers: {
    logOut: (state) => {
      state = { ...state, user: {} };
      return state;
    },
    closeError: (state) => {
      state = { ...state, error: false };
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
          error: false,
        };
        localStorage.setItem(literals.user, JSON.stringify(action.payload));
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
