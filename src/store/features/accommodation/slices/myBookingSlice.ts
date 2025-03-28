import { fetchAllWishlist } from "@/services/accommodation/wishlistServices";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
 import { fetchMyBookings } from "@/services/accommodation/bookingServices";
import { MyBooking, MyBookingState } from "../types/myBookingTypes";
import { mybookingData } from "../staticData/myBooking";

interface myBookingState {
    data: MyBookingState;
    myBookingData:MyBooking;
    status:string;
    loading: boolean;
    error: string | null;
}

 const initialState: myBookingState = {
    data:mybookingData.data,
    myBookingData: {} as MyBooking ,
    // data: {} as CountryHotels, 
    status:'idle',
    loading: false,
    error:null
};

export const getMyBookings = createAsyncThunk(
    'home/fetchMyBookings',
    async (_, { rejectWithValue }) => {
      try {
        const response= await fetchMyBookings() 
        return response.data;
      } catch (error:any) {
        return rejectWithValue(error.message? error.message:'Failed to fetch booking data');
      }
    }
  );

const myBookingSlice = createSlice({
  name: "myBookingSlice",
  initialState,
  reducers: {
    setMyBooking(state, action) {
      state.myBookingData = action.payload;

    },
  },
      extraReducers: (builder) => {
        builder
          .addCase(getMyBookings.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.status = "loading";
          })
           .addCase(getMyBookings.fulfilled, (state, action) => {
            state.loading = false;
            state.data=action.payload
            state.status = "succeeded"; 
          })
          .addCase(getMyBookings.rejected, (state, action) => {
            state.loading = false;
            state.status = "failed";
            state.error = action.payload as string;
          });
      },
  });
  export const { setMyBooking} =  myBookingSlice.actions;

export default myBookingSlice.reducer;
