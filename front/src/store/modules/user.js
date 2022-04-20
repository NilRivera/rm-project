/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const userFetch = 'user/fetch';

const initialState = {
  user: {},
  error: false,
  isLoading: false,
};

export const fetchUser = createAsyncThunk(userFetch, async () => [
  {
    id: 2,
    name: 'Batman',
  },
]);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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
        return state;
      })
      .addCase(fetchUser.rejected, (state) => {
        state = { ...state, isLoading: false, error: true };
        return state;
      });
  },
});
export const { selectCharacter } = userSlice.actions;
export default userSlice.reducer;
