/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import literals from '../../global/literals';
import Api from '../../services/api';

export const userFetch = 'http://localhost:5000/api/login';
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
  const { data: { token } } = await Api.user.get({ email, password });
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
        toast.error(
          'Something went wrong while logging in, please try again later',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
        return state;
      });
  },
});
export const { logOut } = userSlice.actions;
export default userSlice.reducer;
