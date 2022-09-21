import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import categoriesSlice from './slices/categoriesSlice';
import brandsSlice from './slices/brandsSlice';

export const store = configureStore({
  reducer: {
    productSlice,
    categoriesSlice,
    brandsSlice,
  },
});
