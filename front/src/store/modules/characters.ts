/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Api from '../../services/api';

export const charactersFetchType = 'characters/fetch';
export const updateCharacterType = 'character/update';

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

export const fetchCharacters = createAsyncThunk(charactersFetchType, async () => {
  const { data } = await Api.characters.getAll();
  return data;
});
export const updateCharacter = createAsyncThunk(updateCharacterType, async ({ id, isFavorite }:
   {id:number, isFavorite: boolean | undefined}) => {
  const { data } = await Api.characters.updateOne({ id, isFavorite });
  return data;
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
      })
      .addCase(updateCharacter.pending, (state) => {
        state = { ...state, isLoading: true, error: false };
        return state;
      })
      .addCase(updateCharacter.fulfilled, (state, { payload }) => {
        const characters = JSON.parse(JSON.stringify(state.characters));
        let selectedListCharacter = characters.find(({ id }) => id === payload.id);
        selectedListCharacter = { ...selectedListCharacter, isFavorite: payload.isFavorite };
        characters.sort((a, b) => a.id - b.id)
          .splice(selectedListCharacter.id - 1, 1, selectedListCharacter);
        state = {
          ...state,
          characters,
          selectedCharacter:
          selectedListCharacter,
          isLoading: false,
          error: false,
        };
        return state;
      })
      .addCase(updateCharacter.rejected, (state) => {
        state = { ...state, isLoading: false, error: true };
        toast.error(
          'Something went wrong while updating the Character, please try again later',
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
export const { selectCharacter } = characterSlice.actions;
export default characterSlice.reducer;
