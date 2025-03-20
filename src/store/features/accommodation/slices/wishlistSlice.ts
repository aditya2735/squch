import { fetchAllWishlist } from "@/services/accommodation/wishlistServices";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {wishlisData} from '../staticData/wishlistdata'
import { CountryHotels } from "../types/wishlistTypes";

interface wishlistState {
    data: CountryHotels;
    status:string;
    loading: boolean;
    error: string | null;
}

 const initialState: wishlistState = {
    data:wishlisData,
    // data: {} as CountryHotels, 
    status:'idle',
    loading: false,
    error:null
};

export const getWishlistData = createAsyncThunk(
    'home/fetchAllWishlist',
    async (hotel_id:number, { rejectWithValue }) => {
      try {
        const response= await fetchAllWishlist(hotel_id) 
        return response.data;
      } catch (error:any) {
        return rejectWithValue(error.message? error.message:'Failed to fetch hotel data');
      }
    }
  );

const wishlistSlice = createSlice({
  name: "selectedFilters",
  initialState,
  reducers: {
  },
      extraReducers: (builder) => {
        builder
          .addCase(getWishlistData.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.status = "loading";
          })
           .addCase(getWishlistData.fulfilled, (state, action) => {
            state.loading = false;
            state.data=action.payload
            state.status = "succeeded"; 
          })
          .addCase(getWishlistData.rejected, (state, action) => {
            state.loading = false;
            state.status = "failed";
            state.error = action.payload as string;
          });
      },
  });

export default wishlistSlice.reducer;
