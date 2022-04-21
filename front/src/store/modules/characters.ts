/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../services/api';

export const charactersFetch = 'characters/fetch';
export const characterFetch = 'character/fetch';

const iniState = {
  characters: [],
  selectedCharacter: null,
  isLoading: false,
  error: false,
};
/* type character = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string
} */

type initialStateProps = {
  characters: any,
  selectedCharacter: any,
  isLoading: boolean,
  error: boolean,
};

export const fetchCharacters = createAsyncThunk(charactersFetch, async () => {
  const { data: { results } } = await Api.characters.getAll();
  console.log(results);
  return results;
});

export const fetchCharacter = createAsyncThunk(
  characterFetch,
  async ({ id }: {id:number}) => {
    const data = await Api.characters.getOne(id);
    return data;
  },
);

const characterSlice = createSlice({
  name: 'characters',
  initialState: iniState as initialStateProps,
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
