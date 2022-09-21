import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getListOfCategories = createAsyncThunk('categories/getListOfCategories', async () => {
  const { data } = await axios.get(`https://online-store.bootcamp.place/api/categories`);
  return data;
});

const initialState = {
  categories: [],
  activeCategories: [],
  status: 'loading', // loading | success | error
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategories(state, action) {
      state.activeCategories.push(action.payload);
    },
    removeAnActiveCategories(state, action) {
      state.activeCategories = state.activeCategories.filter((item) => item !== action.payload);
    },
    removeAllCategories(state) {
      state.activeCategories = [];
    },
  },
  extraReducers: {
    [getListOfCategories.pending]: (state) => {
      state.status = 'loading';
      state.categories = [];
    },
    [getListOfCategories.fulfilled]: (state, action) => {
      state.status = 'success';
      state.categories = action.payload;
    },
    [getListOfCategories.rejected]: (state) => {
      state.status = 'error';
      state.categories = [];
    },
  },
});

export const { setActiveCategories, removeAnActiveCategories, removeAllCategories } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
