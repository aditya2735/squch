import { fetchHomeHotels } from '@/services/accommodation/homeService';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {hotelData} from '../staticData/hotelData'
import { Hotel } from '../types/hotelTypes';

 export const getHotelData = createAsyncThunk(
  'home/fetchHotelData',
  async (data:any, { rejectWithValue }) => {
    try {
      const response= await fetchHomeHotels(data) 
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message? error.message:'Failed to fetch hotels data');
    }
  }
);

interface HomeHotelState{
  "popular":Hotel[],
  "near":Hotel[],
  "other":Hotel[],
  "trending":Hotel[]
}

interface HotelState {
  data: HomeHotelState;
  loading: boolean;
  error: string | null;
  status:string;

}

const initialState: HotelState = {
  data: hotelData.data,
  loading: false,
  error: null,
 status:"idle",
};

// const initialState: HotelState = {
//   data: {
//     near: [],
//     popular: [],
//     other: [],
//     trending:[]
//   },
//     loading: false,
//     error: null,
//     status:"idle",

// }

const homeHotelSlice = createSlice({
  name: 'homeHotels',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHotelData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";

      })
       .addCase(getHotelData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.status = "succeeded";

      })
      .addCase(getHotelData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.status = "failed";

      });
  },
});
 export default homeHotelSlice.reducer;
