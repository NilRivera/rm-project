/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import character from './mockcharacter.json';

export const charactersFetch = 'characters/fetch';
export const characterFetch = 'character/fetch';
const initialState = {
  characters: [],
  selectedCharacter: null,
  isLoading: false,
  error: false,
};
export const fetchCharacters = createAsyncThunk(charactersFetch, async () => [
  'batman',
  'superman',
  'wonder',
]);
export const fetchCharacter = createAsyncThunk(
  characterFetch,
  async () => character,
);

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    selectCharacter(state, action) {
      state.selectedCharacter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state = { ...state, isLoading: true, error: false };
        return state;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state = {
          ...state,
          isLoading: false,
          characters: action.payload,
          error: false,
        };
        return state;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state = { ...state, isLoading: false, error: true };
        return state;
      })
      .addCase(fetchCharacter.pending, (state) => {
        state = { ...state, isLoading: true, error: false };
        return state;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state = {
          ...state,
          isLoading: false,
          selectedCharacter: action.payload,
          error: false,
        };
        return state;
      })
      .addCase(fetchCharacter.rejected, (state) => {
        state = { ...state, isLoading: false, error: true };
        return state;
      });
  },
});
export const { selectCharacter } = characterSlice.actions;
export default characterSlice.reducer;
