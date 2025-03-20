import {  fetchBannerData } from '@/services/accommodation/homeService';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Banner } from '../types/homePageTypes';
import {BannerData} from '../staticData/bannerData'
 export const getBannerData = createAsyncThunk(
  'home/fetchBannerData',
  async (_, { rejectWithValue }) => {
    try {
      const response= await fetchBannerData() 
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message? error.message:'Failed to fetch banner data');
    }
  }
);

interface BannerState {
  data: Banner[];
  loading: boolean;
  error: string | null;
  status:string;
}

const initialState: BannerState = {
  // data: { } as Banner[],
  data: BannerData,
    loading: false,
    error: null,
    status:"idle",
}

const homeBannerSlice = createSlice({
  name: 'homeBanner',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBannerData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
       .addCase(getBannerData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.data = action.payload;

      })
      .addCase(getBannerData.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
 export default homeBannerSlice.reducer;
