import { fetchHotelDetails } from '@/services/accommodation/hotelDetails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {hotelDetailData} from '../staticData/hotelDetail'
import { Hotel, HotelView,Room  } from '../types/hotelTypes';

 export const getHotelDetails = createAsyncThunk(
  'home/fetchHotelDetails',
  async (id:number, { rejectWithValue }) => {
    try {
      const data={
        hotel_id:id
      }
      const response= await fetchHotelDetails(data) 
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message? error.message:'Failed to fetch hotel data');
    }
  }
);

interface HotelState {
  data: Hotel;
  hotelViewImages:HotelView[];
  rooms:Room[];
  loading: boolean;
  selectedRooms:number[];
  selectedRoomsData:Room[];
  selectedRoom: Room | null;
  status:string;
  error: string | null;
}

const initialState: HotelState = {
  data: hotelDetailData,
  hotelViewImages:hotelDetailData.hotelViewsWithImages,
  rooms:hotelDetailData.roomsCount,
selectedRooms:[],
selectedRoomsData:[],
selectedRoom: null,
  loading: false,
  status:"idle",
  error: null,
};

// const initialState: HotelState = {
//   data: {}  as unknown as Hotel,
//   bannerImages:[],
//   rooms:[],
// selectedRooms:[],
// selectedRoom: null,
//   loading: false,
//   status:"idle",
//   error: null,
// };

const hotelDetailSlice = createSlice({
  name: 'hotelDetails',
  initialState,
  reducers: {
    // setSelectedRooms(state, action: PayloadAction<number>) {
    //     const roomId = action.payload;
    //     const isSelected = state.selectedRooms?.includes(roomId);
   
    //     if (isSelected) { 
    //       state.selectedRooms = state.selectedRooms?.filter((r) => r !== roomId);
    //     } else { 
    //       state.selectedRooms.push(roomId);
    //     }
    //   },
    
    setSelectedRooms(state, action: PayloadAction<Room>) {
      const room = action.payload; 
      const roomId = room.id;
  
      const isSelected = state.selectedRooms?.includes(roomId);
  
      if (isSelected) { 
        state.selectedRooms = state.selectedRooms?.filter((r) => r !== roomId);
        state.selectedRoomsData = state.selectedRoomsData?.filter((r) => r.id !== roomId);
      } else { 
        state.selectedRooms.push(roomId);
        state.selectedRoomsData.push(room);
      }
    },

    setSelectedRoom(state, action: PayloadAction<Room>) {
        const { id } = action.payload;
        state.selectedRoom = state.selectedRoom?.id === id ? null : action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHotelDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
       .addCase(getHotelDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.data = action.payload[0]; 
        state.hotelViewImages=action.payload[0].hotelViewsWithImages 
        state.rooms=action.payload[0].roomsCount
      })
      .addCase(getHotelDetails.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});
export const { setSelectedRooms,setSelectedRoom } = hotelDetailSlice.actions;
export default hotelDetailSlice.reducer;
