import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStatus from "./AsyncStatus";
import IProduct from "../models/IProduct"

// initial state
export interface DataState {
   products: IProduct[],
   status: AsyncStatus,
   lookingFor: string,
   maxPrice: number,
   minPrice: number
}

const initialState: DataState = {
   products: [],
   status: AsyncStatus.Idle,
   lookingFor: "",
   maxPrice: 0,
   minPrice: 0
}

// async actions 
export const fetchDataAsync = createAsyncThunk(
   "data/fetchData/Async",
   async function (_, { rejectWithValue }) {

      // create little sleep to show loading on the page 
      await new Promise(resolve => setTimeout(resolve, 1000));
      // -----------------------------------------------

      try {
         const responce = await fetch("http://localhost:3000/data.json", {
            method: "GET"
         });

         if (!responce.ok) {
            return new Error("Failed fetching data")
         }

         const data = await (responce.json() as Promise<{ products: IProduct[] }>)
         return data.products;

      } catch (error) {
         return rejectWithValue((error as Error).message)
      }
   }
)

// slice
const dataSlice = createSlice({
   name: "data",
   initialState,
   reducers: {
      setSearch(state, action: PayloadAction<{ text: string }>) {
         state.lookingFor = action.payload.text;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchDataAsync.pending, (state) => {
            state.status = AsyncStatus.Loading;
         })
         .addCase(fetchDataAsync.fulfilled, (state, action) => {
            state.products = action.payload as IProduct[];
            state.status = AsyncStatus.Idle;

            let maxPrice = state.products[0]?.price;
            let minPrice = state.products[0]?.price;

            state.products.forEach((prod) => {
               if (maxPrice < prod.price)
                  maxPrice = prod.price;
               else if (minPrice > prod.price)
                  minPrice = prod.price;
            })

            state.maxPrice = maxPrice;
            state.minPrice = minPrice;
         })
         .addCase(fetchDataAsync.rejected, (state) => {
            state.status = AsyncStatus.Failed;
         })
   }
})

export const {
   setSearch
} = dataSlice.actions;

export default dataSlice.reducer;