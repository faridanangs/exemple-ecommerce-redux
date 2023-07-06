import axios from "axios";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const getDataProduct = createAsyncThunk(
  "products/getDataProducts",
  async (value) => {
    const response = await axios.get("http://localhost:5000/products");
    if (value != null) {
      const result = response.data.filter((val) => {
        for (const i in val) {
          if (
            val[i] &&
            typeof val[i] === "string" &&
            val[i].toLowerCase().includes(value.toLowerCase())
          ) {
            return true;
          }
        }
      });
      return result;
    } else {
      return response.data;
    }
  }
);


const DataApiProduct = createEntityAdapter();

const ProductSlice = createSlice({
  name: "products",
  initialState: DataApiProduct.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getDataProduct.fulfilled, (s, a) => {
      DataApiProduct.setAll(s, a.payload);
    });
  },
});

const dataProductsStore = createSlice({
  name: "cart store",
  initialState: {
    cart: [],
    favorite: [],
    kategory: [],
    dataLoginUser: [],
  },
  reducers: {
    addTocart: (state, action) => {
      let dataSebelum = state.cart.filter((e) => e.id !== action.payload.id);
      let dataSesudah = state.cart.filter((e) => e.id === action.payload.id);
      let key = dataSesudah.length ? dataSesudah[0]?.query + 1 : 1;
      dataSesudah.length
        ? (dataSesudah[0] = { ...action.payload, query: key })
        : (dataSesudah = [{ ...action.payload, query: key }]);
      dataSebelum.push(dataSesudah[0]);
      state.cart = dataSebelum;
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
    addToFavorive: (state, action) => {
      let favBefore = state.favorite.filter(
        (val) => val.id !== action.payload.id
      );
      let favAfter = state.favorite.filter(
        (val) => val.id === action.payload.id
      );
      let qry = favAfter.length ? favAfter[0]?.qry + 1 : 1;
      favAfter.length
        ? (favAfter[0] = { ...action.payload, qry: qry })
        : (favAfter = [{ ...action.payload, qry: qry }]);
      favBefore.push(favAfter[0]);
      state.favorite = favBefore;
    },
    deleteFav: (state, action) => {
      state.favorite = state.favorite.filter(
        (val) => val.id !== action.payload
      );
    },
    addTocategory: (state, action) => {
      state.kategory = action.payload;
    },
    loginUser: (state, action)=> {
      state.dataLoginUser = {
        nama: action.payload.nama,
        password: action.payload.past
      }
    },
    apusAkun: (state, action)=> {
      state.dataLoginUser = action.payload
    }
  },
});

export const {
  addTocart,
  deleteCart,
  addToFavorive,
  deleteFav,
  addTocategory,
  loginUser,
  apusAkun
} = dataProductsStore.actions;

export const DataProducts = DataApiProduct.getSelectors((state) => {
  return state.products;
});

export const productStoreCount = dataProductsStore.reducer;
export default ProductSlice.reducer;
