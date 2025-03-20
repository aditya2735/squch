import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilterData } from '@/services/accommodation/homeService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {filterData} from '../staticData/filterData'
import { Amenity, BookingOption } from "../types/hotelTypes";
import { AccessibilityCategories } from "../types/filterTypes";

export const getFilterData = createAsyncThunk(
  'home/filter',
  async (_, { rejectWithValue }) => {
    try {
      const response= await fetchFilterData() 
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message? error.message:'Failed to fetch filters data');
    }
  }
);

interface FiltersState {
  amenities:Amenity[];
  bookingOptions:BookingOption[];
  accessibilityCategories:AccessibilityCategories[];
  status:string;
  loading: boolean;
  error: string | null;
}

const initialState: FiltersState = {
  amenities: filterData.data.amenities,
  bookingOptions:  filterData.data.bookingOptions,
  accessibilityCategories: filterData.data.accessibilityCategories,
  loading:false,
  status: 'idle',
  error: null,
};

// const initialState: FiltersState = {
//     amenities: [],
//     bookingOptions:  [],
//     accessibilityCategories: [],
//     status: 'idle',
//     loading:false,
//     error: null,
//   };

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilterData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFilterData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.amenities = action.payload.amenities;
        state.bookingOptions = action.payload.bookingOptions;
        state.accessibilityCategories = action.payload.accessibilityCategories;
      })
      .addCase(getFilterData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default filtersSlice.reducer;
