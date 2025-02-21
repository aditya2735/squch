import { fetchHomeHotels } from '@//services/accommodation/homeService';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

 export const getHotelData = createAsyncThunk(
  'home/fetchHotelData',
  async (_, { rejectWithValue }) => {
    try {
      const response= await fetchHomeHotels() 
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message? error.message:'Failed to fetch hotels data');
    }
  }
);

interface HotelState {
  data: any;
  nearYou:any;
  others:any;
  popular:any;
  loading: boolean;
  error: string | null;
}

const initialState: HotelState = {
  data: [],
  nearYou:[],
  others:[],
  popular:[],
  loading: false,
  error: null,
};

const homeHotelSlice = createSlice({
  name: 'homeHotels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHotelData.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
       .addCase(getHotelData.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
        // state.popular=action.payload.data.popular;
      })
      .addCase(getHotelData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default homeHotelSlice.reducer;
