import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async (URL) => {
  const { data, headers } = await axios.get(`https://online-store.bootcamp.place/api/${URL}`);
  return { data, headers };
});

const initialState = {
  products: [],
  pagination: {
    totalPageCount: 0,
    activePage: 1,
    itemsPerPage: 9,
  },
  search: '',
  cart: [],
  totalPrice: 0,
  status: 'loading', // loading | success | error
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setTotalPageCount(state, action) {
      state.pagination.totalPageCount = action.payload;
      // state.pagination.test = state.pagination.totalPageCount / state.pagination.itemsPerPage;
      // console.log(state.pagination.test);
    },
    setActivePage(state, action) {
      state.pagination.activePage = action.payload;
    },
    setNextPage(state) {
      if (
        state.pagination.activePage <
        Math.ceil(state.pagination.totalPageCount / state.pagination.itemsPerPage)
      ) {
        state.pagination.activePage += 1;
      }
    },
    setPrevPage(state) {
      if (state.pagination.activePage > 1) {
        state.pagination.activePage -= 1;
      }
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCart(state, action) {
      const findItem = state.cart.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cart.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.cart.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.cart.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeAllCartItems(state) {
      state.cart = [];
      state.totalPrice = 0;
    },
    removeCartItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
      state.products = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.products = action.payload.data;
      state.pagination.totalPageCount = Number(action.payload.headers['x-total-count']);
    },
    [fetchProducts.rejected]: (state) => {
      state.status = 'error';
      state.products = [];
    },
  },
});

export const {
  setProducts,
  setTotalPageCount,
  setActivePage,
  setNextPage,
  setPrevPage,
  setSearch,
  setCart,
  setTotalPrice,
  removeAllCartItems,
  removeCartItem,
  minusItem,
} = productSlice.actions;
export default productSlice.reducer;
