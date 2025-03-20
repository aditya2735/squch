import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Deals } from '../types/homePageTypes';
import { fetchDealsData } from '@/services/accommodation/homeService';

 export const getDealsData = createAsyncThunk(
  'home/fetchDealsData',
  async (_, { rejectWithValue }) => {
    try {
      const response= await fetchDealsData() 
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message? error.message:'Failed to fetch deals data');
    }
  }
);

interface DealsState {
  data: Deals;
  loading: boolean;
  error: string | null;
  status:string;
  
}

const initialState: DealsState = {
  data: { } as Deals,
    loading: false,
    error: null,
    status:"idle",
}

const homeDealsSlice = createSlice({
  name: 'homeDeals',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDealsData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
       .addCase(getDealsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(getDealsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.status = "failed";

      });
  },
});
 export default homeDealsSlice.reducer;
