/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Api from '../../services/api';

export const charactersFetch = 'characters/fetch';
export const characterFetch = 'character/fetch';

const iniState = {
  characters: [],
  selectedCharacter: {},
  isLoading: false,
  error: false,
};

type initialStateProps = {
  characters: any,
  selectedCharacter: any,
  isLoading: boolean,
  error: boolean,
};

export const fetchCharacters = createAsyncThunk(charactersFetch, async () => {
  const { data: { results } } = await Api.characters.getAll();
  return results;
});

const characterSlice = createSlice({
  name: 'characters',
  initialState: iniState as initialStateProps,
  reducers: {
    selectCharacter(state, { payload }) {
      const characters = JSON.parse(JSON.stringify(state.characters));
      const selectedListCharacter = characters.find(({ id }) => id === payload.id);
      state = { ...state, selectedCharacter: selectedListCharacter };
      return state;
    },
    addFavorite(state, { payload }) {
      const characters = JSON.parse(JSON.stringify(state.characters));
      let selectedListCharacter = characters.find(({ id }) => id === payload.id);
      selectedListCharacter = { ...selectedListCharacter, isFavorite: true };
      characters.splice(selectedListCharacter.id - 1, 1, selectedListCharacter);
      state = { ...state, characters, selectedCharacter: selectedListCharacter };
      return state;
    },
    deleteFavorite(state, { payload }) {
      const characters = JSON.parse(JSON.stringify(state.characters));
      let selectedListCharacter = characters.find(({ id }) => id === payload.id);
      selectedListCharacter = { ...selectedListCharacter, isFavorite: false };
      characters.splice(selectedListCharacter.id - 1, 1, selectedListCharacter);
      state = { ...state, characters, selectedCharacter: selectedListCharacter };
      return state;
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
        toast.error(
          'Something went wrong while fetching Characters, please try again later',
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
export const { selectCharacter, addFavorite, deleteFavorite } = characterSlice.actions;
export default characterSlice.reducer;
