import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getListOfBrands = createAsyncThunk('brands/getListOfBrands', async () => {
  const { data } = await axios.get(`https://online-store.bootcamp.place/api/brands`);
  return data;
});

const initialState = {
  brands: [],
  activeBrands: [],
  status: 'loading', // loading | success | error
};

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setActiveBrands(state, action) {
      state.activeBrands.push(action.payload);
    },
    removeAnActiveBrands(state, action) {
      state.activeBrands = state.activeBrands.filter((item) => item !== action.payload);
    },
    removeAllBrands(state) {
      state.activeBrands = [];
    },
  },
  extraReducers: {
    [getListOfBrands.pending]: (state) => {
      state.status = 'loading';
      state.brands = [];
    },
    [getListOfBrands.fulfilled]: (state, action) => {
      state.status = 'success';
      state.brands = action.payload;
    },
    [getListOfBrands.rejected]: (state) => {
      state.status = 'error';
      state.brands = [];
    },
  },
});

export const { setActiveBrands, removeAnActiveBrands, removeAllBrands } = brandsSlice.actions;
export default brandsSlice.reducer;
