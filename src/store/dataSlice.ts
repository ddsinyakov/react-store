import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStatus from "./AsyncStatus";

// initial state
export interface DataState {
   products: String[],
   status: AsyncStatus
}

const initialState: DataState = {
   products: [],
   status: AsyncStatus.Idle
}

// async actions 
export const fetchDataAsync = createAsyncThunk(
   "data/fetchData/Async",
   async function (_, { rejectWithValue }) {
      try {
         const responce = await fetch("data.json", {
            method: "GET"
         });

         if (!responce.ok) {
            return new Error("Failed fetching data")
         }

         const data = await responce.json()
         return data.names;

      } catch (error) {
         return rejectWithValue((error as Error).message)
      }
   }
)

// slice
const dataSlice = createSlice({
   name: "data",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchDataAsync.pending, (state) => {
            state.status = AsyncStatus.Loading;
         })
         .addCase(fetchDataAsync.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = AsyncStatus.Idle;
         })
         .addCase(fetchDataAsync.rejected, (state) => {
            state.status = AsyncStatus.Failed;
         })
   }
})

//export const { } = dataSlice.actions;
export default dataSlice.reducer;