import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {SearchData} from '../staticData/searchData'
import { fetchSearchData } from "@/services/accommodation/homeService";
import { Hotel } from "../types/hotelTypes";

export interface SearchState {
  data: Hotel[];
  status: string;
  loading: boolean;
  error: string | null;
}

 const initialState: SearchState = {
    data:SearchData.data,
    // data: {} as CountryHotels, 
    status:'idle',
    loading: false,
    error:null
};

export const getSearchData = createAsyncThunk(
    'home/fetchSearchData',
    async (data:any, { rejectWithValue }) => {
      try {
        const response= await fetchSearchData(data) 
        return response.data;
      } catch (error:any) {
        return rejectWithValue(error.message? error.message:'Failed to fetch hotel data');
      }
    }
  );

const searchSlice = createSlice({
  name: "selectedFilters",
  initialState,
  reducers: {
  },
      extraReducers: (builder) => {
        builder
          .addCase(getSearchData.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.status = "loading";
          })
           .addCase(getSearchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data=action.payload
            state.status = "succeeded"; 
          })
          .addCase(getSearchData.rejected, (state, action) => {
            state.loading = false;
            state.status = "failed";
            state.error = action.payload as string;
          });
      },
  });

export default searchSlice.reducer;
