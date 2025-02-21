import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HousePoliciesState {
  location: object | null;
  checkIn: string | null;
  checkOut: string | null;
  guests: Array<object>;
}

const initialState: HousePoliciesState = {
  location: null,
  checkIn: null,
  checkOut: null,
  guests: [],
};

const housePoliciesSlice = createSlice({
  name: "housePolicies",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<object>) {
      state.location = action.payload;
    },
    setCheckIn(state, action: PayloadAction<string>) {
      state.checkIn = action.payload;
    },
    setCheckOut(state, action: PayloadAction<string>) {
      state.checkOut = action.payload;
    },
    setGuests(state, action: PayloadAction<Array<object>>) {
      state.guests = action.payload;
    },
  },
});

export const { setLocation, setCheckIn,setCheckOut, setGuests } = housePoliciesSlice.actions;
export default housePoliciesSlice.reducer;
