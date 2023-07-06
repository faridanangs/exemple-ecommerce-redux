import { configureStore } from '@reduxjs/toolkit';
import ProductSlice, { productStoreCount } from '../slice/ProductSlice';

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    storeProduct: productStoreCount,
  },
});
